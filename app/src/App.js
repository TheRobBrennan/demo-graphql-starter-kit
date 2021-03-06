import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { withApollo } from 'react-apollo'

import Users from './Users'

export const ROOT_QUERY = gql`
  query allUsers {
    totalUsers
    allUsers {
      ...userInfo
    }
  }

  fragment userInfo on User {
    githubLogin
    name
    avatar
  }
`

const LISTEN_FOR_USERS = gql`
  subscription {
    newUser {
      githubLogin
      name
      avatar
    }
  }
`

class App extends Component {
  componentDidMount() {
    let { client } = this.props
    this.listenForUsers = client
      .subscribe({ query: LISTEN_FOR_USERS })
      .subscribe(({ data: { newUser } }) => {
        console.log(`A new user has been added:
        ${JSON.stringify(newUser, null, 2)}
        `)
        const data = client.readQuery({ query: ROOT_QUERY })
        data.totalUsers += 1
        data.allUsers = [...data.allUsers, newUser]
        client.writeQuery({ query: ROOT_QUERY, data })
      })
  }

  componentWillUnmount() {
    this.listenForUsers.unsubscribe()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Fragment>
                <Users />
              </Fragment>
            )}
          />
          <Route
            component={({ location }) => (
              <h1>"{location.pathname}" not found</h1>
            )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default withApollo(App)

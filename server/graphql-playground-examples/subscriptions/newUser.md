# Examples

Feel free to copy and paste these examples into your GraphQL playground.

```graphql
subscription{
  newUser {
    name
    githubLogin
    avatar
  }
}
```

When you hit the play button on the GraphQL playground, you will see a spinner and that you are listening/subscribed. Now, open another tab and then perform the `addFakeUsers` mutation. You will see we are getting the `name`, `githubLogin`, and `avatar` of the newly added user!

```graphql
{
  "data": {
    "newUser": {
      "name": "olivia caldwell",
      "githubLogin": "brownlion610",
      "avatar": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
    }
  }
}
```

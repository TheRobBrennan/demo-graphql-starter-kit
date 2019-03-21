# Welcome

Once your GraphQL server is up and running, you can explore the GraphQL playground.

## GraphQL playground

If you have followed the instructions outlined for this project, the GraphQL playground should be available at [http://localhost:4000/graphql](http://localhost:4000/graphql)

Once you have loaded the GraphQL playground, you should see an option on the far right to explore the schema. Our simple example contains a few queries that we can execute, a mutation to allow us to add one or more fake users to our back-end database, and the ability to subscribe to our GraphQL server for updates when new users are added.

### Queries

If we explore the schema for our GraphQL server, we can see several queries that are available:

- `totalUsers` - Returns a numeric value for the total number of users
- `allUsers` - Returns an array of `User` objects with the requested field(s) for all users
- `User` - Returns a specific `User` object with the requested field(s)

### Mutations

If we are going to be modifying our back-end data, we will use GraphQL mutations.

If we explore the schema for our GraphQL server, we can see mutation(s) that are available:

- `addFakeUsers` - This adds one (or more) users to our back-end and returns an array of `User` objects with the requested field(s)

### Subscriptions

If we explore the schema for our GraphQL server, we can see subscription(s) that are available:

- `newUser` - This allows you to subscribe and listen to `user-added` events. Notice how `server/resolvers/Subscription.js` has a subscribe function listening to `user-added`, and that our `addFakeUsers` mutation in `server/resolvers/Mutation.js` publishes a `user-added` event with data that matches our specific `User` object type.

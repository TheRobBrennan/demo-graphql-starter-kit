# Examples

Feel free to copy and paste these examples into your GraphQL playground.

```graphql
mutation {
  addFakeUsers(count:1) {
   	githubLogin
  	name
    avatar
  }
}
```

This will result in something like:

```graphql
{
  "data": {
    "addFakeUsers": [
      {
        "githubLogin": "blackfish379",
        "name": "marcelina leistad",
        "avatar": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
      }
    ]
  }
}
```
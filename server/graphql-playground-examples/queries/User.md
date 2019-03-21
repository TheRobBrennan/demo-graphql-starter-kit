# Examples

Feel free to copy and paste these examples into your GraphQL playground.

```graphql
{
  User(login:"blackfish379") {
    name
    githubLogin
  }
}
```

This will result in something like:

```graphql
{
  "data": {
    "User": {
      "name": "marcelina leistad",
      "githubLogin": "blackfish379"
    }
  }
}
```

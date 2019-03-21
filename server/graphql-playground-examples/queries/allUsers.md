# Examples

Feel free to copy and paste these examples into your GraphQL playground.

```graphql
{
  allUsers {
    name
    githubLogin
    avatar
  }
}
```

This will result in something like:

```graphql
{
  "data": {
    "allUsers": [
      {
        "name": "marcelina leistad",
        "githubLogin": "blackfish379",
        "avatar": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
      }
    ]
  }
}
```

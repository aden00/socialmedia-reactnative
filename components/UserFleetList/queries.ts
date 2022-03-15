export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        image
        stories {
          nextToken
          items {
            id
            type
            text
            image
            createdAt
            updatedAt
            userStoriesId
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

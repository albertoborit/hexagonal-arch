export const typeDefs = `#graphql
  type User {
    id: String
    username: String
    active: Boolean
  }

  type Query {
    users: [User!]!
    getUserById(id: String!): User
  }
`;

export const clientTypeDefs = `#graphql
  type Client {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    clients: [Client]
    client(id: ID!): Client
  }
`;

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateHandler } from '@as-integrations/azure-functions';

// The GraphQL schema
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    books: () => books,
  },
};

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateHandler(server);
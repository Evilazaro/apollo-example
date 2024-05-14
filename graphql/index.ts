import { ApolloServer } from '@apollo/server';
import { startServerAndCreateHandler } from '@as-integrations/azure-functions';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { clientTypeDefs } from '../schemas/clientSchema';
import { productCatalogTypeDefs } from '../schemas/productCatalogSchema';
import { clientResolvers } from '../resolvers/clientResolvers';
import { productCatalogResolvers } from '../resolvers/productCatalogResolvers';

// Merge schemas and resolvers
const typeDefs = mergeTypeDefs([clientTypeDefs, productCatalogTypeDefs]);
const resolvers = mergeResolvers([clientResolvers, productCatalogResolvers]);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateHandler(server);
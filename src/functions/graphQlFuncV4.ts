import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { ApolloServer } from '@apollo/server';
import { v4 } from '@as-integrations/azure-functions';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { clientTypeDefs } from '../schemas/clientSchema'
import { productCatalogTypeDefs } from '../schemas/productCatalogSchema';
import { clientResolvers } from '../resolvers/clientResolvers';
import { productCatalogResolvers } from '../resolvers/productCatalogResolvers'; // Update the file path here

// Merge schemas and resolvers
const typeDefs = mergeTypeDefs([clientTypeDefs, productCatalogTypeDefs]);
const resolvers = mergeResolvers([clientResolvers, productCatalogResolvers]);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.http('graphQlFuncV4', {
    handler: v4.startServerAndCreateHandler(server),
  });
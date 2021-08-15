import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { SchemaDirectiveVisitor } from 'graphql-tools';
// import ConnectionManager, { Logger } from 'dashboard-common';
import typeDefs from './schemas';
import resolvers from './resolvers';

// ConnectionManager.initialize({ appName: 'service-backend-template' });

const directives = {};
const schema = buildFederatedSchema({ typeDefs, resolvers });
SchemaDirectiveVisitor.visitSchemaDirectives(schema, directives);

const server = new ApolloServer({
  schema,
});

server
  .listen({ port: 4001 })
  .then(({ url }) => console.log(`Server started at ${url}`));
// .then(({ url }) => Logger.info(`Server started at ${url}`));

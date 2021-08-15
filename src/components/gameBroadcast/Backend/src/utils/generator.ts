import path from 'path';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import { buildFederatedSchema } from '@apollo/federation';
import typeDefs from '../schemas';

/**
 * Utility Function to generate the typings for TS
 * DO NOT EDIT THIS FILE
 */
function generateTypes() {
  console.log('Starting Type Generation for GraphQL Schemas: ======>');
  generateTypeScriptTypes(
    buildFederatedSchema({ typeDefs }),
    path.join(__dirname, '../typings/__generated__.ts'),
    {
      minimizeInterfaceImplementation: true,
      smartTParent: true,
      smartTResult: true,
      asyncResult: true,
      contextType: 'IContext',
      typePrefix: 'I',
      importStatements: [`import { IContext } from './index';`],
    }
  )
    .then(() => {
      console.log('Schema Generation Completed: ======>');
      process.exit(0);
    })
    .catch((err) => {
      console.log('Schema Generation Failed with error: ======>');
      console.error(err);
      process.exit(1);
    });
}

generateTypes();

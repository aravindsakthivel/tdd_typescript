// import { DocumentNode } from 'graphql';
// import { mergeTypeDefs } from 'graphql-tools';
// import HelloServiceSchema from './HelloServiceSchema';

// // export all the typedefs from here as an array
// const typeDefs: Array<DocumentNode> = [HelloServiceSchema];

// export default mergeTypeDefs(typeDefs);

import * as fs from 'fs';
import * as path from 'path';
import { mergeTypeDefs } from 'graphql-tools';

const gqlFiles = fs
  .readdirSync(__dirname)
  .filter((f) => f.endsWith('.gql') || f.endsWith('.graphql'));

const typeDefs = gqlFiles.map((filePath) =>
  fs.readFileSync(path.join(__dirname, filePath), 'utf-8')
);

export default mergeTypeDefs(typeDefs);

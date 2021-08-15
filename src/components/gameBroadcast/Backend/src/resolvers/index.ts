import { mergeResolvers } from 'graphql-tools';
import HelloServiceResolvers from './helloService';
import StorageServiceResolvers from './storageService';
import ReferralServiceResolvers from './referralService';
import AddUserServiceResolvers from './addUserService';

// export all the files from the resolvers over here as a single object spreading all the keys from the other files in the same folder or subfolder
const resolvers = [
  HelloServiceResolvers,
  StorageServiceResolvers,
  ReferralServiceResolvers,
  AddUserServiceResolvers,
];

export default mergeResolvers(resolvers);

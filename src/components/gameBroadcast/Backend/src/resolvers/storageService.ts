import { GraphQLResolverMap } from 'apollo-graphql';
import { IContext } from '../typings';
import StorageService from '../services/StorageService';
import { MutationToCreateObjectResolver } from '../typings/__generated__';

const createObject: MutationToCreateObjectResolver = (_, { data }) => {
  return StorageService.createObject(data);
};

const StorageServiceResolvers: GraphQLResolverMap<IContext> = {
  Mutation: {
    createObject,
  },
};

export default StorageServiceResolvers;

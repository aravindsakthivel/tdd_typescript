import { GraphQLResolverMap } from 'apollo-graphql';
import AddUserService from '../services/AddUserService';
import { IContext } from '../typings';
import { MutationToAddUserResolver } from '../typings/__generated__';

const addUser: MutationToAddUserResolver = (_, { data }) => {
  return AddUserService.addUser(data);
};

const AddUserServiceResolvers: GraphQLResolverMap<IContext> = {
  Mutation: {
    addUser,
  },
};

export default AddUserServiceResolvers;

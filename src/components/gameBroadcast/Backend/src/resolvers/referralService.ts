import { GraphQLResolverMap } from 'apollo-graphql';
import ReferralService from '../services/ReferrralService';
import { IContext } from '../typings';
import {
  QueryToGetReferralLinksResolver,
  MutationToGenerateReferralLinkResolver,
} from '../typings/__generated__';

const getReferralLinks: QueryToGetReferralLinksResolver = (_, { data }) => {
  return ReferralService.getReferralLinks(data);
};

const generateReferralLink: MutationToGenerateReferralLinkResolver = (
  _,
  { data }
) => {
  return ReferralService.generateReferralLink(data);
};

const ReferralServiceResolvers: GraphQLResolverMap<IContext> = {
  Mutation: {
    generateReferralLink,
  },
  Query: {
    getReferralLinks,
  },
};

export default ReferralServiceResolvers;

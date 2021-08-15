import { GraphQLResolverMap } from 'apollo-graphql';
import { IContext } from '../typings';
import {
  IBook,
  MutationToAddBookResolver,
  QueryToBooksResolver,
} from '../typings/__generated__';

const DUMMY_BOOKS: IBook[] = [
  {
    title: 'Sample 1',
    author: 'Pranjul Sharma',
  },
  {
    title: 'Sample 2',
    author: 'Safi',
  },
];
const books: QueryToBooksResolver = () => {
  return DUMMY_BOOKS;
};

const addBook: MutationToAddBookResolver = (_, args) => {
  DUMMY_BOOKS.push({ title: args.title, author: args.author });
  return DUMMY_BOOKS[DUMMY_BOOKS.length - 1];
};

const HelloServiceResolvers: GraphQLResolverMap<IContext> = {
  Query: {
    books,
  },
  Mutation: {
    addBook,
  },
};

export default HelloServiceResolvers;

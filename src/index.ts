import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import { arr } from './faker';
import { Helloresolver } from './Query/Resolver';
import { Data } from './Query/Interface';

export const datas: Data[] = arr;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [Helloresolver],
  });
  const apolloserver = new ApolloServer({ schema });
  const app = Express();
  apolloserver.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log('sever started on http://localhost:4000/graphql');
  });
};

main();

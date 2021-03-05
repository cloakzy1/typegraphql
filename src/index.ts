import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema, ObjectType, Query, Resolver, Field } from 'type-graphql';
import { arr } from './faker';

@ObjectType()
export class Todo {
  @Field()
  DataNum: String;

  @Field()
  data: String;

  @Field()
  phoneNumber: String;

  @Field()
  jobTitle: String;

  @Field()
  date: Date;
}

interface Data {
  data: string;
  DataNum: string;
  phoneNumber: String;
  jobTitle: String;
  date: Date;
}

const datas: Data[] = arr;

@Resolver()
class Helloresolver {
  @Query(() => [Todo])
  async hello() {
    return datas;
  }
}

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

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema, ObjectType, Query, Resolver, Field } from 'type-graphql';

@ObjectType()
export class Todo {
  @Field()
  DataNum: String;

  @Field()
  data: String;

  @Field()
  l: number;
}

interface Data {
  DataNum: string;
  data: string;
}

const datas: Data[] = [
  { data: 'Robin Langworth', DataNum: 'Zoie70@hotmail.com' },
  { data: 'Tom Hane', DataNum: 'Skyla_Gutmann19@hotmail.com' },
  { data: 'Glen Mueller', DataNum: 'Jevon_Veum14@yahoo.com' },
  {
    data: 'Mr. Sidney Kuhlman',
    DataNum: 'Pinkie_Schaefer18@gmail.com',
  },
  { data: 'Marjorie Klocko', DataNum: 'Jessie.Kuvalis@hotmail.com' },
  { data: 'Allen Klein', DataNum: 'Kaleigh_Mayert30@hotmail.com' },
  { data: 'Leslie Marquardt', DataNum: 'Zelma.Nicolas17@hotmail.com' },
  { data: 'Antonia Wintheiser', DataNum: 'Royal_Kerluke@yahoo.com' },
  { data: 'Lynda Murphy', DataNum: 'Odell.Gulgowski@yahoo.com' },
  { data: 'Angie Blick', DataNum: 'Devan.Schumm@yahoo.com' },
  { data: 'Randy Smitham', DataNum: 'Orlando_Jacobs88@hotmail.com' },
  { data: 'Evan Balistreri', DataNum: 'Leta_Deckow@gmail.com' },
  { data: 'Joey Schneider', DataNum: 'Liliana_Pollich74@yahoo.com' },
  { data: 'Miss Emily Johns', DataNum: 'Murphy66@hotmail.com' },
  { data: 'Marcella Bogisich', DataNum: 'Kaylie_Kautzer@yahoo.com' },
  { data: 'Mrs. Edward Walker', DataNum: 'Daphne52@gmail.com' },
  { data: 'Dixie Kassulke', DataNum: 'Malachi.Stokes87@yahoo.com' },
  { data: 'Laurence Roob DDS', DataNum: 'Mariane_Batz@yahoo.com' },
];

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

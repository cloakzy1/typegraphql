import 'reflect-metadata';
import { ObjectType, Field } from 'type-graphql';

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

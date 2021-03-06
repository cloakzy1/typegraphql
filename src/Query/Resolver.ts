import 'reflect-metadata';
import { Resolver, Query } from 'type-graphql';
import { Todo } from './Query';
import { datas } from '../index';

@Resolver()
export class Helloresolver {
  @Query(() => [Todo])
  async hello() {
    return datas;
  }
}

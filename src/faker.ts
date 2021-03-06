import * as faker from 'faker';
import { Data } from './Query/Interface';

export let arr: Data[] = [];
for (let i = 0; i < 500; i++) {
  // let dataCollector: Data;
  // dataCollector = {
  //   data: faker.name.findName(),
  //   DataNum: faker.internet.email(),
  // };
  arr[i] = {
    data: faker.name.findName(),
    DataNum: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    date: faker.date.soon(),
  };

  // arr.push(dataCollector);
}

// console.log(arr);

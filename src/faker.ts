import * as faker from 'faker';

interface Data {
  data?: string;
  DataNum?: string;
}

export let arr: Data[] = [];
for (let i = 0; i < 100; i++) {
  // let dataCollector: Data;
  // dataCollector = {
  //   data: faker.name.findName(),
  //   DataNum: faker.internet.email(),
  // };
  arr[i] = { data: faker.name.findName(), DataNum: faker.internet.email() };

  // arr.push(dataCollector);
}

console.log(arr);

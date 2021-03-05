import * as faker from 'faker';
interface Data {
  data: string;
  DataNum: string;
  phoneNumber: String;
  jobTitle: String;
  date: Date;
}

export let arr: Data[] = [];
for (let i = 0; i < 69; i++) {
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

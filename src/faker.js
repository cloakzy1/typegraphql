'use strict';
exports.__esModule = true;
exports.arr = void 0;
var faker = require('faker');
exports.arr = [];
for (var i = 0; i < 100; i++) {
  // let dataCollector: Data;
  // dataCollector = {
  //   data: faker.name.findName(),
  //   DataNum: faker.internet.email(),
  // };
  exports.arr[i] = {
    data: faker.name.findName(),
    DataNum: faker.internet.email(),
  };
}
console.log(exports.arr);

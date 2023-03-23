import { readFileSync } from 'fs';
import _ from 'lodash';

const genDiff = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2);
};

const readFile = (filepath1, filepath2) => {
  const content1 = readFileSync(filepath1, 'utf-8');
  const parseContent1 = JSON.parse(content1);
  const content2 = readFileSync(filepath2, 'utf-8');
  const parseContent2 = JSON.parse(content2);

  console.log(parseContent1);
  console.log(parseContent2);
};

export default genDiff;
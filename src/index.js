import { readFileSync } from 'fs';
import _ from 'lodash';

const getInfoDiff = (data1, data2) => {
  const keys = _.uniq(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const result = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if ((value1 !== value2) && (value1 && value2)) {
        return {
            type: 'changed',
            key,
            value1,
            value2,
        };
    }
    if (!_.has(data2, key)) {
        return {
            type: 'deleted',
            key,
            value: value1,
        };
    }
    if (!_.has(data1, key)) {
        return {
            type: 'added',
            key,
            value: value2,
        };
    }
    return {
        type: 'unchanged',
        key,
        value1: value1,
    };
  });
  return result;
};

const getDiff = (diffArr) => {
    const result = diffArr.map((diff) => {
        const diffType = diff.type;
        switch (diffType) {
            case 'deleted':
                return `  - ${ diff.key }: ${ diff.value }`;
            case 'unchanged':
                return `    ${ diff.key }: ${ diff.value }`;
            case 'changed':
                return `  - ${ diff.key }: ${ diff.value1 } \n  + ${ diff.key }: ${ diff.value2 }`;
            case 'added':
                return `  + ${ diff.key }: ${ diff.value2 }`;
            default:
                return null;
        }
    });
    return `{\n${result.join('\n')}\n}`;
}

const readFile = (filepath1, filepath2) => {
  const content1 = readFileSync(filepath1, 'utf-8');
  const parseContent1 = JSON.parse(content1);
  const content2 = readFileSync(filepath2, 'utf-8');
  const parseContent2 = JSON.parse(content2);
  return getDiff(getInfoDiff(parseContent1, parseContent2));
};

export default readFile;
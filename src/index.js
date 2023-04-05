import path from 'path';
import { readFileSync } from 'fs';
import getParse from './parsers.js';
import getFormat from './formatters/index.js';
import buildTree from './buildTree.js';

const formats = (filename) => path.extname(filename).slice(1);

const getData = (file) => {
  const pathFile = readFileSync(path.resolve(process.cwd(), '__fixtures__', file));
  const formatFile = formats(file);
  return getParse(pathFile, formatFile);
};

const genDiff = (filepath1, filepath2, type = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const difference = buildTree(data1, data2);
  const result = getFormat(difference, type);

  return result;
};

export default genDiff;

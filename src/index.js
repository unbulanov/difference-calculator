import path from 'path';
import getParseFile from './parsers.js';
import formatter from './formatters/index.js';
import buildTree from './buildTree.js';

const getFormat = (filename) => path.extname(filename).slice(1);

const getData = (file) => {
  const formatFile = getFormat(file);
  return getParseFile(file, formatFile);
};

const genDiff = (filepath1, filepath2, type = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const difference = buildTree(data1, data2);
  const result = formatter(difference, type);

  return result;
};

export default genDiff;

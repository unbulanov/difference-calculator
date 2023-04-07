import path from 'path';
import { readFileSync } from 'fs';
import parse from './parser.js';
import format from './formatters/index.js';
import buildTree from './buildTree.js';

const getFileType = (filename) => path.extname(filename).slice(1);

const getFileData = (filename) => readFileSync(path.resolve(process.cwd(), '__fixtures__', filename));

const genDiff = (filepath1, filepath2, type = 'stylish') => {
  const data1 = parse(getFileData(filepath1), getFileType(filepath1));
  const data2 = parse(getFileData(filepath2), getFileType(filepath2));
  const difference = buildTree(data1, data2);
  const result = format(difference, type);

  return result;
};

export default genDiff;

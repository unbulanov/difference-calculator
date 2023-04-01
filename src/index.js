import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';
import getParseFile from './parsers.js';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);

const readFile = (filepath) => readFileSync(getAbsolutePath(filepath), 'utf-8');

const getParseFile = (filepath) => JSON.parse(readFile(filepath));

const genDiff = (filepath1, filepath2, format) => {
  const result = getDiffTree(filepath1, filepath2);
  return getDiff(result, format);
};

export default genDiff;

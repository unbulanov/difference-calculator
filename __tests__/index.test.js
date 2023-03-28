import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const fileOutputJson = readFile('fileOutputJsonDiff.txt');

const first = getFixturePath('file1.json');
const second = getFixturePath('file2.json');

test('difference test 1', () => {
  expect(genDiff(first, second)).toEqual(fileOutputJson);
});

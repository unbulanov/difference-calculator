import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const fileOutput = readFile('fileOutputDiff.txt');
const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const file3 = getFixturePath('file1.yml');
const file4 = getFixturePath('file2.yml');

describe('comparing files', () => {
  test('gendiff two files json', () => {
    expect(genDiff(file1, file2)).toEqual(fileOutput);
    // expect(genDiff(file3, file4)).toEqual(fileOutput);
  });
});

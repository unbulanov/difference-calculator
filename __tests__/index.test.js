import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const stylishOutput = readFile('stylishResult.txt');
const plainOutput = readFile('plainResult.txt');
const jsonOutput = readFile('jsonResult.txt');

const fileJson1 = getFixturePath('file1.json');
const fileJson2 = getFixturePath('file2.json');

const fileYml3 = getFixturePath('file1.yml');
const fileYml4 = getFixturePath('file2.yml');

describe('comparing files', () => {
  test('gendiff default format', () => {
    expect(genDiff(fileJson1, fileJson2)).toEqual(stylishOutput);
    expect(genDiff(fileYml3, fileYml4)).toEqual(stylishOutput);
  });
  test('gendiff stylish format', () => {
    expect(genDiff(fileJson1, fileJson2, 'stylish')).toEqual(stylishOutput);
    expect(genDiff(fileYml3, fileYml4, 'stylish')).toEqual(stylishOutput);
  });
  test('gendiff plain format', () => {
    expect(genDiff(fileJson1, fileJson2, 'plain')).toEqual(plainOutput);
    expect(genDiff(fileYml3, fileYml4, 'plain')).toEqual(plainOutput);
  });
  test('gendiff json format', () => {
    expect(genDiff(fileJson1, fileJson2, 'json')).toEqual(jsonOutput);
    expect(genDiff(fileYml3, fileYml4, 'json')).toEqual(jsonOutput);
  });
});

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

const formats = [
  ['stylish', stylishOutput],
  ['plain', plainOutput],
  ['json', jsonOutput],
];

describe('comparing files', () => {
  test.each(formats)('gendiff %p formats', (format, expected) => {
    expect(genDiff(fileJson1, fileJson2, format)).toEqual(expected);
    expect(genDiff(fileYml3, fileYml4, format)).toEqual(expected);
  });
});

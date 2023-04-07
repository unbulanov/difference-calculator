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

const fileFormats = ['json', 'yml', 'yaml'];

describe('comparing files', () => {
  test.each(fileFormats)('gendiff %p formats', (format) => {
    const filepath1 = getFixturePath(`file1.${format}`);
    const filepath2 = getFixturePath(`file2.${format}`);
    expect(genDiff(filepath1, filepath2)).toEqual(stylishOutput);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(stylishOutput);
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(plainOutput);
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(jsonOutput);
  });
});

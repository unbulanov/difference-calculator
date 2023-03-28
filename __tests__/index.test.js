import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const fileOutputJson = readFile('fileOutputJsonDiff.txt');
const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';

describe('comparing files', () => {
    test('gendiff two files json', () => {
        // expect(genDiff('', '')).toEqual('');
        expect(genDiff(file1, file2)).toEqual(fileOutputJson);
    });
});


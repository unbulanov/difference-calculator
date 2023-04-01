import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';

const getParseFile = (file, format) => {
    switch (format) {
        case 'JSON':
            return JSON.parse(readFileSync(path.resolve(file), 'utf-8'));
        case 'yml':
            return yaml.load(readFileSync(path.resolve(file), 'utf-8'));
        case 'yaml':
            return yaml.load(readFileSync(path.resolve(file), 'utf-8'));
        default:
            return null;
    }
};

export default getParseFile;
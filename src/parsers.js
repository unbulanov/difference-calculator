import yaml from 'js-yaml';

const getParseFile = (file, format) => {
    switch (format) {
        case 'JSON':
            return JSON.parse(file);
        case 'yml':
            return yaml.load(file);
        case 'yaml':
            return yaml.load(file);
        default:
            return null;
    }
};

export default getParseFile;
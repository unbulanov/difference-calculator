import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    case 'json':
      return json(tree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatter;

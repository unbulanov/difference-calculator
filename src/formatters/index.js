import plain from './plain.js';
import stylish from './stylish.js';

const formatter = (tree, format) => {
  switch (format) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default formatter;

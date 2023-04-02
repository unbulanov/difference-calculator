import _ from 'lodash';

const getIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);
const getBackIndent = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  const values = Object.entries(value);
  const result = values.map(([key, val]) => `${getIndent(depth)}  ${key}: ${stringify(val, depth + 1)}`).join('\n');

  return `{\n${result}\n${getBackIndent(depth - 1)}}`;
};

const stylish = (arr) => {
  const iter = (currentValues, depth) => {
    const lines = currentValues.map((node) => {
      switch (node.type) {
        case 'changed':
          return [`${getIndent(depth)}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${getIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth + 1)}`].join('\n');
        case 'deleted':
          return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'added':
          return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'nested':
          return `${getIndent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1)}\n${getBackIndent(depth)}}`;
        case 'unchanged':
          return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth + 1)}`;
        default:
          throw new Error(`Unknown type of data: ${node.type}`);
      }
    });

    return lines.join('\n');
  };

  return `{\n${iter(arr, 1)}\n}`;
};

export default stylish;

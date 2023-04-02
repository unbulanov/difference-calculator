import _ from 'lodash';

const getStart = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);
const getEnd = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount);

const stringify = (value, depth = 1) => {
  const values = Object.entries(value);
  const result = values.map((key) => {
    const isPlain = (val) => (_.isObject(values) ? `${getStart(depth)}  ${key}: ${stringify(val, depth + 1)}`.join('\n') : val);
    return isPlain;
  });

  return `{\n${result}\n${getEnd(depth - 1)}}`;
};

const stylish = (tree) => {
  const iter = (value, depth) => {
    const getStartDepth = getStart(depth);
    const getEndDepth = getEnd(depth);

    const values = value.map((node) => {
      switch (node.type) {
        case 'changed':
          return [`${getStartDepth}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${getStartDepth}+ ${node.key}: ${stringify(node.value2, depth + 1)}`].join('\n');
        case 'deleted':
          return `${getStartDepth}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'added':
          return `${getStartDepth}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'nested':
          return `${getStartDepth}  ${node.key}: {\n${iter(node.children, depth + 1)}\n${getEndDepth}}`;
        case 'unchanged':
          return `${getStartDepth}  ${node.key}: ${stringify(node.value, depth + 1)}`;
        default:
          throw new Error(`Unknown type: ${node.type}`);
      }
    });

    return values.join('\n');
  };

  return `{\n${iter(tree, 1)}\n}`;
};

export default stylish;

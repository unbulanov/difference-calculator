import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const iter = (value, depth = '') => {
    const values = value
      .flatMap((node) => {
        const currentPath = depth ? `${depth}.${node.key}` : node.key;
        switch (node.type) {
          case 'changed':
            return `Property '${currentPath}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
          case 'deleted':
            return `Property '${currentPath}' was removed`;
          case 'added':
            return `Property '${currentPath}' was added with value: ${stringify(node.value)}`;
          case 'nested':
            return iter(node.children, `${currentPath}`);
          case 'unchanged':
            return null;
          default:
            throw new Error(`Unknown type: ${node.type}`);
        }
      })
      .filter((node) => node !== null)
      .join('\n');
    return values;
  };
  return iter(tree);
};

export default plain;

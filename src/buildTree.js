import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.isEqual(value1, value2)) {
      return {
        type: 'changed',
        key,
        value1,
        value2,
      };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        type: 'nested',
        key,
        children: getDiffTree(value1, value2),
      }
    }
    if (!_.has(data2, key)) {
      return {
        type: 'deleted',
        key,
        value1,
      };
    }
    if (!_.has(data1, key)) {
      return {
        type: 'added',
        key,
        value2,
      };
    }
    return {
      type: 'unchanged',
      key,
      value1,
    };
  });
  
  return result;
};

export default buildTree;
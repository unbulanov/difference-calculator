import _ from 'lodash';

const buildTree = (data1, data2) => {
  const commonKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = commonKeys.map((key) => {
    const val1 = data1[key];
    const val2 = data2[key];

    if (_.isPlainObject(val1) && _.isPlainObject(val2)) {
      return { type: 'nested', key: `${key}`, children: buildTree(val1, val2) };
    }

    if (!_.has(data1, key)) {
      return { type: 'added', key: `${key}`, value: val2 };
    }

    if (!_.has(data2, key)) {
      return { type: 'deleted', key: `${key}`, value: val1 };
    }

    if (!_.isEqual(val1, val2)) {
      return {
        type: 'changed', key: `${key}`, value1: val1, value2: val2,
      };
    }

    return { type: 'unchanged', key: `${key}`, value: val1 };
  });

  return result;
};

export default buildTree;

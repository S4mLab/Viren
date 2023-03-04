const _ = require('lodash');

const Association = (_nodeA, _nodeB, content) => {
  _.extend(this, {
    content: content,
    nodeA: _nodeA,
    nodeB: _nodeB
  });
};

module.exports = Association;

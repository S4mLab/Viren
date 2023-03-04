const _ = require('lodash');

const Theme = (_node) => {
  _.extend(this, _node.properties);
  if (!this.content) {
    this.content = "empty";
  }
  if (!this.hierarchy) {
    this.hierarchy = 1;
  }
};

module.exports = Theme;

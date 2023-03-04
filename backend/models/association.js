const _ = require('lodash');

const Association = (theme1, theme2, content = "") => {
  this.theme1 = theme1 ? theme1 : new Error("Corrupted first theme");
  this.theme2 = theme2 ? theme2 : new Error("Corrupted second theme");
};

module.exports = Association;

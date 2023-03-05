const _ = require('lodash');

const Association = (theme1, theme2, content = "") => {
  return {
    theme1: theme1 ? theme1 : new Error("Corrupted first theme"),
    theme2: theme2 ? theme2 : new Error("Corrupted second theme"),
    content: content ? content.replaceAll("\"", "").replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "").trim() : null,
  }
};

module.exports = Association;

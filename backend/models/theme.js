const _ = require('lodash');

const Theme = (meetingID, content, hierarchy) => {
  this.meetingID = meetingID ? meetingID : "";
  this.content = content ? content : Error("Corrupted theme content");
  this.hierarchy = hierarchy ? hierarchy : Error("Corrupted theme hierarchy");
};

module.exports = Theme;

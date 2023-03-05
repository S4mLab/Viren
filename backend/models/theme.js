const _ = require('lodash');

const Theme = (meetingID, content, hierarchy) => {
  return {
    meetingID: meetingID ? String(meetingID.replaceAll("\"", "").replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "").trim()) : Error("Corrupted meeting ID"),
    content: content ? String(content.replaceAll("\"", "").replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "").trim()) : Error("Corrupted theme content"),
    hierarchy: hierarchy ? hierarchy : Error("Corrupted theme hierarchy"),
  }
};

module.exports = Theme;

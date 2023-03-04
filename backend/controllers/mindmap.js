const mindmapRouter = require('express').Router();
const Theme = require('../models/theme');
const Association = require('../models/association');
const { transcribeAudio } = require('../utils/audioTranscriber');
const { readMap, createTheme, createAssociation } = require('../utils/neo4jStorage');
const { getMeetingSummaryTitle, getMeetingBulletPoints } = require("../utils/chatGPTHelper");

mindmapRouter.get('/:id', async (request, response, next) => {
  const { id } = request.params;
  response.json(await readMap(id));
});

mindmapRouter.post('/', async (request, response, next) => {
  const { meetingID, fileBuffer } = request;

  const transcribedMeeting = transcribeAudio(fileBuffer);
  const heading = getMeetingSummaryTitle(transcribedMeeting);
  const root = Theme(meetingID, heading, 1);
  await createTheme(root);
  const rawChatGPTResult = await getMeetingBulletPoints(transcribedMeeting);
  for (var theme in rawChatGPTResult.split(/\r?\n/)) {
    const newChildTheme = Theme(meetingID = null, theme, 2);
    await createTheme(newChildTheme);
    await createAssociation(Association(root, newChildTheme));
  }

  response.json(200);
});

module.exports = mindmapRouter;

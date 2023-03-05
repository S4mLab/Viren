const multer = require('multer');
const mindmapRouter = require('express').Router();
const Theme = require('../models/theme');
const Association = require('../models/association');
const { transcribeAudio } = require('../utils/audioTranscriber');
const { readMap, createTheme, createAssociation } = require('../utils/neo4jStorage');
const { getMeetingSummaryTitle, getMeetingBulletPoints } = require("../utils/chatGPTHelper");
const logger = require('../utils/logger');
const { forEach } = require('lodash');

const upload = multer();

mindmapRouter.get('/:id', async (request, response, next) => {
  const { id } = request.params;
  response.json(await readMap(id));
});

mindmapRouter.post('/:id', upload.single('meeting audio'), async (request, response, next) => {
  const meetingID = request.params.id;
  const { file } = request;
  const transcribedMeeting = await transcribeAudio(file);
  const heading = await getMeetingSummaryTitle(transcribedMeeting);
  const root = Theme(meetingID, heading, 1);
  await createTheme(root);
  const rawChatGPTResult = await getMeetingBulletPoints(transcribedMeeting);
  rawChatGPTResult.split(/\n/).forEach(async (s) => {
    if (typeof s === 'string') {
      const newChildTheme = Theme(meetingID, s, 2);
      if (!newChildTheme.meetingID) return;
      await createTheme(newChildTheme);
      await createAssociation(Association(root, newChildTheme));
    }
  });
  response.json(200);
});

module.exports = mindmapRouter;

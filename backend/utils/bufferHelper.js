const fs = require('fs');
const { promisify } = require('util');
const Audio = require('../models/theme');
const {
  S3RetrieveItem,
} = require('./neo4jStorage');
const { convertToWAV } = require('./audioConverter');

const clearTempBuffer = async (filePath) => {
  const unlinkPromise = promisify(fs.unlink);
  await unlinkPromise(filePath);
};

// returns the name of the file written to FS, responses with status code 404 if error
const tryBufferFileFromId = async (request, response, out) => {
  const audio = await Audio.findById(request.params.id);
  if (!audio) {
    response.status(404).send({ error: 'file info not found in database' });
    return false;
  }
  let result;
  try {
    result = await S3RetrieveItem(request.user.userID, audio.id);
  } catch (err) {
    response.status(404).send({ error: 'file data not found in database' });
    return false;
  }
  const writeFilePromise = promisify(fs.writeFile);
  const filePath = `./server/temp/files/${audio.name}.wav`;
  // write file to FS
  const err = await writeFilePromise(filePath, result.Body, 'ascii');
  convertToWAV(filePath);
  if (err) {
    response.status(500).send({ error: 'cannot write file to temporary buffer for download' });
    return false;
  }
  out.audioName = audio.name;
  return true;
};

// downloads the file written to FS as attachment
// auto clears buffer when done, responses with status code 404 if error
const getBufferFileFromId = async (request, response) => {
  const out = {};
  if (await tryBufferFileFromId(request, response, out)) {
    const { audioName } = out;
    await response.download(`./server/temp/files/${audioName}.wav`, () => {
      clearTempBuffer(`./server/temp/files/${audioName}.wav`);
    });
  }
};

const tryBufferFileFromRequest = async (request, response, out) => {
  const { audioFile } = request;
  if (!audioFile) {
    response.status(404).send({ error: 'file info not found in database' });
    return false;
  }
  const writeFilePromise = promisify(fs.writeFile);
  const filePath = `./server/temp/files/${audioFile.name}.wav`;
  // write file to FS
  const err = await writeFilePromise(filePath, audioFile.buffer, 'ascii');
  convertToWAV(filePath);
  if (err) {
    response.status(500).send({ error: 'cannot write file to temporary buffer for download' });
    return false;
  }
  out.audioName = audioFile.name;
  return true;
};

module.exports = {
  tryBufferFileFromRequest, tryBufferFileFromId, getBufferFileFromId, clearTempBuffer,
};

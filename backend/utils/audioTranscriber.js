const { spawn } = require('child_process');
const logger = require('./logger');
const speech = require('@google-cloud/speech');

// TODO: call Google API's Speech-To-Text

// Creates a client
const client = new speech.SpeechClient();

async function googgleTextToSpeechWrapper(data) {
 
  const audio = {
    "content": data,
  };
  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };
  const request = {
    audio: audio,
    config: config,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  logger.info(`Transcription: ${transcription}`);
  return transcription;
}

const transcribeAudio = async (data) => {
  var result = "";
  logger.info(`Audio file received. Defering to Google API's transcription service...`);
  result = await googgleTextToSpeechWrapper(data);
  return result;
};

module.exports = { transcribeAudio };

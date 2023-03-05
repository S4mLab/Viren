const { spawn } = require('child_process');
const logger = require('./logger');
const speech = require('@google-cloud/speech');

// TODO: call Google API's Speech-To-Text

// Creates a client
const client = new speech.SpeechClient();

async function googgleTextToSpeechWrapper(data) {
  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const audio = {
    uri: gcsUri,
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
  const response = await client.recognize(request);
  const transcription = response[0].results[0].alternatives[0].transcript;
  return transcription;
}

const transcribeAudio = async (data) => {
  logger.info(`Audio file received. Defering to Google API's transcription service...`);
  const result = await googgleTextToSpeechWrapper(data);
  return result;
};

module.exports = { transcribeAudio };

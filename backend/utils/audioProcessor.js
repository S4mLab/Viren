const { spawn } = require('child_process');
const logger = require('./logger');

const getChildProcessResult = (process) => new Promise((resolve) => {
  let result = '';
  let error = '';
  process.stdout.on('data', (data) => {
    result += data;
  });

  process.stderr.on('data', (data) => {
    error += data;
  });

  process.on('close', (code, signal) => {
    // logger.info('The data retrieved from the Python script is, ', result);
    // logger.info('The error retrieve from the Python script is, ', error);
    // logger.info(`code: ${code}`);
    // logger.info(`signal: ${signal}`);
    resolve(result);
  });
});

const processAudio = async (command, fileName) => {
  // file is name of audio (no extension) in file system
  logger.info(`${command} request received. Waiting for server to process...`);
  const process = spawn('python', [`server\\processors\\${command}.py`, fileName]);
  const result = await getChildProcessResult(process);
  return result;
};

module.exports = { processAudio };

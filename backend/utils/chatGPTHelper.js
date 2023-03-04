const { ChatGPTAPI } = require('chatgpt');
const logger = require('./logger');

const queryChatGPT = async (query, data) => {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  });
  try {
    const res = await api.sendMessage(`${query} ${data}`);
    return res;
  } catch (e) {
    logger.errorInfo(e);
  }
}

const getMeetingSummaryTitle = async (data) =>
  await queryChatGPT("Generate a one-line heading for the content of this conversation: ", data);

const getMeetingBulletPoints = async (data) =>
  await queryChatGPT("Summarize the contentn of this conversation in 6 bulletpoints maximum, 10 words each: ", data);

module.exports = {
  getMeetingSummaryTitle,
  getMeetingBulletPoints
};
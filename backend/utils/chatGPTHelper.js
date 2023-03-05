const config = require('./config');
const logger = require('./logger');
const tectalicOpenai = require('@tectalic/openai').default;

const queryChatGPT = async (query, data) => {
  try {
    const response = await tectalicOpenai(config.OPENAI_API_KEY)
      .completions.create({
        model: 'text-davinci-003',
        prompt: `${query} ${data}`
      })
    return response.data.choices[0].text.trim();
  } catch (err) {
    logger.errorInfo(err);
  }
}

const getMeetingSummaryTitle = async (data) =>
  await queryChatGPT("Generate a one-line heading for the content of this conversation: ", data);

const getMeetingBulletPoints = async (data) =>
  await queryChatGPT("Summarize the content of this conversation in 6 keywords maximum, each separated by a new line: ", data);

module.exports = {
  getMeetingSummaryTitle,
  getMeetingBulletPoints
};
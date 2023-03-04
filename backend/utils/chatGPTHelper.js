const { Configuration, OpenAIApi } = require("openai");
const logger = require('./logger');

const queryChatGPT = async (query, data) => {
  const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY
  });
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${query} ${data}`,
    });
    console.log(completion.data.choices[0].text);
    return completion.data.choices[0].text;
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
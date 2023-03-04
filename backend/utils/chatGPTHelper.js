import { ChatGPTAPI } from 'chatgpt'

export default async function ConverseTextToMindMap(data) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  });
  try{
  const res = await api.sendMessage(data);
  return res;
  } catch (e){
    console.log(e)
  }
}
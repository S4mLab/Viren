require('dotenv').config();

const NEO4J_URI = process.env.NEO4J_URI;
const PORT = process.env.PORT;
const AURA_INSTANCENAME = process.env.AURA_INSTANCENAME;
const NEO4J_USERNAME = process.env.NEO4J_USERNAME;
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

module.exports = {
  NEO4J_URI,
  PORT,
  AURA_INSTANCENAME,
  NEO4J_USERNAME,
  NEO4J_PASSWORD,
  OPENAI_API_KEY,
};

const neo4j = require('neo4j-driver');
const config = require('./config');
const logger = require('./logger');

const structureGraphResponse = (result) => {
  result.records.forEach(record => {
    // TODO: structure response data matching expected shape
  })
}

const neo4jQuery = async (query, data) => {
  logger.info('connecting to', config.NEO4J_URI);
  const driver = neo4j.driver(config.NEO4J_URI, neo4j.auth.basic(config.NEO4J_USERNAME, config.NEO4J_PASSWORD));
  try {
    const session = driver.session(config.NEO4J_URI)
    logger.info('connected to Neo4J');
    const result = await session.executeWrite(tx => tx.run(query, data));
    return structureGraphResponse(result);
  } catch (err) {
    logger.errorInfo('error connecting to Neo4J:', err.message);
  } finally {
    await driver.close();
  }
}

const themeQuery = (newTheme) => `(${newTheme.meetingID}:Theme { content: ${newTheme.name}, hierarchy: ${newTheme.hierarchy} })`;

const createTheme = async (newTheme) => {
  await neo4jQuery(`MERGE ${themeQuery(newTheme)}`);
};

const createAssociation = async (theme1, theme2, newAssoc) => {
  await neo4jQuery(`MERGE ${themeQuery(theme1)}-[:Association]-${themeQuery(theme2)}`);
};

const readMap = async (meetingID) => {
  await neo4jQuery(`MATCH (${meetingID}:Theme)-[*]-(connected) RETURN connected`);
};

module.exports = {
  createTheme, createAssociation, readMap,
};

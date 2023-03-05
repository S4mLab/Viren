const neo4j = require('neo4j-driver');
const config = require('./config');
const logger = require('./logger');

const structureGraphResponse = (result) => {
  let rootNode;
  const subNodes = [];
  result.records.forEach(record => {
    const node = record.get('n');
    const id = node.elementId;
    if (node.properties.hierarchy.low === 1) {
      subNodes.push({
        id,
        label: node.properties.content,
        "isMainTopic": true
      })
    } else {
      subNodes.push({
        id,
        label: node.properties.content
      })
    }
  })
  return {
    Viren: subNodes
  };
}

const neo4jQuery = async (query) => {
  //logger.info('connecting to', config.NEO4J_URI);
  const driver = neo4j.driver(config.NEO4J_URI, neo4j.auth.basic(config.NEO4J_USERNAME, config.NEO4J_PASSWORD));
  try {
    const session = driver.session(config.NEO4J_URI)
    //logger.info('connected to Neo4J');
    try {
      const result = await session.executeWrite(tx => tx.run(query));
      return structureGraphResponse(result);
    } catch (err) {
      logger.info(err);
    }
  } catch (err) {
    logger.errorInfo('error connecting to Neo4J:', err.message);
  } finally {
    await driver.close();
  }
}

const themeQuery = (newTheme) => {
  if (newTheme) {
    return `(:Theme { meetingID: \'${newTheme.meetingID}\', content: \'${newTheme.content}\', hierarchy: ${newTheme.hierarchy} })`
  } else {
    return '';
  }
}

const createTheme = async (newTheme) => {
  const newQuery = themeQuery(newTheme);
  try {
    await neo4jQuery(`MERGE ${newQuery}`);
  } catch (err) { logger.errorInfo(err); }
};

const createAssociation = async (theme1, theme2, newAssoc) => {
  if (!theme1 || !theme2) return;
  await neo4jQuery(`MERGE ${themeQuery(theme1)}-[:Association]-${themeQuery(theme2)}`);
};

const readMap = async (meetingID) => {
  const result = await neo4jQuery(`MATCH (n:Theme {meetingID: \'${meetingID}\'}) RETURN n`);
  return result;
};

module.exports = {
  createTheme, createAssociation, readMap,
};

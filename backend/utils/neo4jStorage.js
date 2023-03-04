const neo4j = require('neo4j-driver');
const config = require('./config');
const logger = require('./logger');

const neo4jQuery = async (query, data) => {
  logger.info('connecting to', config.NEO4J_URI);
  const driver = neo4j.driver(config.NEO4J_URI, neo4j.auth.basic(config.NEO4J_USERNAME, config.NEO4J_PASSWORD));
  try {
    const session = driver.session(config.NEO4J_URI)
    logger.info('connected to Neo4J');
    const result = await session.executeWrite(tx => tx.run(query, data));
  } catch (err) {
    logger.errorInfo('error connecting to Neo4J:', err.message);
  } finally {
    await driver.close();
  }
}

const themeQuery = (newTheme) => `({ content: ${newTheme.name}, hierarchy: ${newTheme.hierarchy} }:Theme)`;

const createTheme = async (newTheme) => {
  await neo4jQuery(`MERGE ${themeQuery(newTheme)}`);
};

const createAssociation = async (theme1, theme2, newAssoc) => {
  await neo4jQuery(`MERGE ${themeQuery(theme1)}-[:Association]-${themeQuery(theme2)}`);
};

const read

const S3RetrieveItem = (userID, id) => new Promise((resolve, reject) => {
  s3.getObject({
    Bucket: config.AURA_INSTANCENAME,
    Key: `${userID}/${id}`,
  }, (err, data) => {
    if (err) {
      logger.errorInfo(err, err.stack);
      throw err;
    } else {
      resolve(data);
    }
  });
});

module.exports = {
  S3Delete, S3Insert, S3RetrieveItem, S3RetrieveAll, S3Update,
};

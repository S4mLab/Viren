const mindmapRouter = require('express').Router();
const { readMap, createTheme, createAssociation } = require('../utils/neo4jStorage');

mindmapRouter.get('/:id', async (request, response, next) => {
  const { id } = request.params;
  response.json(await readMap(id));
});

mindmapRouter.post('/', async (request, response, next) => {
  const out = {};
  if (await tryBufferFileFromRequest(request, response, out)) {
    const { audioName } = out;
    const processedFilePath = await processAudio(req, audioName);
    response.download(processedFilePath.trim(), () => {
      clearTempBuffer(`./server/temp/files/${audioName}.wav`);
      clearTempBuffer(processedFilePath.trim());
    });
  }
});

module.exports = mindmapRouter;

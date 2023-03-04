const mindmapRouter = require('express').Router();
const { tryBufferFileFromRequest, clearTempBuffer } = require('../utils/bufferHelper');
const { processAudio } = require('../utils/audioProcessor');

mindmapRouter.get('/:id', async (request, response, next) => {
  const { id } = request.params;
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

mindmapRouter.post('/:req', async (request, response, next) => {
  if (await tryAuthorizeRequest(request, response)) {
    const { req } = request.params;
    const acceptedReq = ['normalize', 'denoise', 'silence', 'transcribe'];
    if (!acceptedReq.includes(req)) {
      next();
    }
    const out = {};
    if (await tryBufferFileFromRequest(request, response, out)) {
      const { audioName } = out;
      const processedFilePath = await processAudio(req, audioName);
      response.download(processedFilePath.trim(), () => {
        clearTempBuffer(`./server/temp/files/${audioName}.wav`);
        clearTempBuffer(processedFilePath.trim());
      });
    }
  }
});

module.exports = mindmapRouter;

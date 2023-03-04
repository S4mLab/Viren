const Mp32Wav = require('mp3-to-wav')

const convertToWAV = (mp3FilePath) => {
    new Mp32Wav(mp3FilePath).exec()
}

module.exports = { convertToWAV }
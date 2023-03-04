const jwt = require('jsonwebtoken');
const _ = require('lodash');
const User = require('../models/association');
const Audio = require('../models/theme');

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

// returns collection of all users with ID matching
const getLoggedInUser = async (request, response) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  const user = await User.findById(decodedToken.id);
  if (!user) {
    return response.status(401).send({ error: 'user not found' });
  }
  return user;
};

const getLoggedInUserID = async (request, response) => {
  const user = await getLoggedInUser(request, response);
  return user.id;
};

const tryAuthorizeRequest = async (request, response) => {
  const user = await getLoggedInUser(request, response);
  const audio = await Audio.findById(request.params.id);
  if (!audio) {
    response.status(404).send({ error: 'file not found' });
    return false;
  }
  const authorized = _.some(user.audios, audio._id);
  if (!authorized) {
    response.status(401).send({ error: 'unauthorized permission' });
    return false;
  }
  return true;
};

module.exports = {
  getTokenFrom, getLoggedInUser, getLoggedInUserID, tryAuthorizeRequest,
};

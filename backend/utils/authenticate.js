const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/association');
const { getTokenFrom, getLoggedInUserID } = require('./authHelper');

const authenticate = async (request, response, next) => {
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }
  const userID = await getLoggedInUserID(request, response);
  request.user = {
    userID,
  };
  next();
};

module.exports = authenticate;

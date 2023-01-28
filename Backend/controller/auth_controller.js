const User = require('../model/user_model');

const jwt = require('jsonwebtoken');
const Err = require('../error_handler/error');
const createSendToken = (data) => {
  return jwt.sign(JSON.parse(JSON.stringify(data)), process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.create_user = async (model, result, next) => {
  const register = await model.create(result);
  if (!register) {
    throw new Err('user not registered!');
  }
  return createSendToken(register);
};

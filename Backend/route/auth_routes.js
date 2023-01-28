const express = require('express');
const User = require('../model/user_model');
const Auth = require('../controller/auth_controller');
const catchAsync = require('../utils/catch_Async');
const router = express.Router();

router.post(
  '/register',
  catchAsync(async (req, res, next) => {
    const result = req.body;
    let token = await Auth.create_user(User, result, next);
    return res.status(200).json({
      status: 'success',
      result,
      token,
    });
  })
);

module.exports = router;

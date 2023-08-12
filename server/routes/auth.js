const express = require('express');
const { signUp, login } = require('../controllers/auth');
const errorCatcher = require('../middlewares/errorCatcher');
const authRouter = express.Router();



authRouter.post('/signup', errorCatcher(signUp));
authRouter.post('/login', errorCatcher(login));


module.exports = authRouter;
const express = require("express");
const userRouter = express.Router();
const errorCatcher = require("../middlewares/errorCatcher");
const { getUserData } = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");

userRouter.get("/", verifyToken, errorCatcher(getUserData));

module.exports = userRouter;

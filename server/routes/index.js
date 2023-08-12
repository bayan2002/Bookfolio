const express = require("express");
const authRouter = require("./auth");
const bookRouter = require("./book");
const userRouter = require("./user");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/book", bookRouter);

module.exports = router;
const express = require("express");
const bookRouter = express.Router();

const {
  addBook,
  getAllUserBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  searchBooks,
  getStarredBooks,
} = require("../controllers/book");
const verifyToken = require("../middlewares/verifyToken");
const errorCatcher = require("../middlewares/errorCatcher");

bookRouter.post("/", verifyToken, errorCatcher(addBook));

bookRouter.get("/", verifyToken, errorCatcher(getAllUserBooks));

bookRouter.get("/search", verifyToken, errorCatcher(searchBooks));

bookRouter.get("/starred", verifyToken, errorCatcher(getStarredBooks));

bookRouter.get("/:bookId", verifyToken, errorCatcher(getSingleBook));

bookRouter.put("/:bookId", verifyToken, errorCatcher(updateBook));

bookRouter.delete("/:bookId", verifyToken, errorCatcher(deleteBook));

module.exports = bookRouter;

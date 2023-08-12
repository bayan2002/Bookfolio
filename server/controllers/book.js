const { Book } = require("../models");
const { Op } = require("sequelize");

const addBook = async (req, res) => {
  const { title, category, author, imageLink, description } = req.body;
  const { UserId } = req.user;

  const book = await Book.create({
    title,
    category,
    author,
    imageLink,
    description,
    UserId,
  });
  res.send({
    status: 201,
    data: book,
    msg: "Book added successfully",
  });
};

const getAllUserBooks = async (req, res) => {
  const { UserId } = req.user;

  const books = await Book.findAll({
    where: {
      UserId,
    },
    order: [["id", "DESC"]],
  });

  res.send({
    status: 200,
    data: books,
    msg: "Successful get all user's books",
  });
};
const getSingleBook = async (req, res) => {
  const { bookId } = req.params;
  const { UserId } = req.user;

  const book = await Book.findOne({
    where: {
      id: bookId,
      UserId,
    },
  });
  res.send({
    status: 200,
    data: book,
    msg: "Successful get single book",
  });
};

const updateBook = async (req, res) => {
  const { UserId } = req.user;
  const { bookId } = req.params;
  const { title, category, author, imageLink, description, starred } = req.body;

  const book = await Book.findOne({
    where: {
      UserId,
      id: bookId,
    },
  });
  if (!book)
    throw serverErrs.BAD_REQUEST({
      english: "Book not found",
    });
  await book.update({
    title: title || book.title,
    category: category || book.category,
    author: author || book.author,
    imageLink: imageLink || book.imageLink,
    description: description || book.description,
    starred: starred == "undefined" ? book.starred : starred,
  });
  res.send({
    status: 200,
    data: book,
    msg: "Successful update book",
  });
};
const deleteBook = async (req, res) => {
  const { UserId } = req.user;
  const { bookId } = req.params;
  const bookToDelete = await Book.findOne({
    where: {
      UserId,
      id: bookId,
    },
  });
  if (!bookToDelete) {
    throw serverErrs.BAD_REQUEST("Book not found");
  }

  await bookToDelete.destroy();
  res.send({
    status: 200,
    data: bookToDelete,
    msg: "Successful delete book",
  });
};

const searchBooks = async (req, res) => {
  const { UserId } = req.user;
  const { query } = req.query;
  const books = await Book.findAll({
    where: {
      UserId,
      [Op.or]: [
        { author: { [Op.iLike]: `%${query}%` } },
        { title: { [Op.iLike]: `%${query}%` } },
        { category: { [Op.iLike]: `%${query}%` } },
      ],
    },
  });
  res.send({
    status: 200,
    data: books,
    msg: "Successful search books",
  });
};
const getStarredBooks = async (req, res) => {
  const { UserId } = req.user;
  const starredBooks = await Book.findAll({
    where: {
      UserId,
      starred: true,
    },
  });
  res.send({
    status: 200,
    data: starredBooks,
    msg: "Successful get starred books",
  });
};
module.exports = {
  addBook,
  getAllUserBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  searchBooks,
  getStarredBooks,
};

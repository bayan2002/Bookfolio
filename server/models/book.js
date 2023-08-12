const { DataTypes } = require("sequelize");
const sequelize = require("../db/config/connection");

const Book = sequelize.define("Book", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imageLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  starred: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Book;

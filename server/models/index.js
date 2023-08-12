const User = require("./user");
const Book = require("./book");

User.hasMany(Book);
Book.belongsTo(User);

module.exports = {
  User,
  Book,
};
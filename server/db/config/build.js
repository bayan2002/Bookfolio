const sequelize = require("./connection");
const { user, books } = require("./fakeData");

const { User, Book } = require("../../models");

const insertDB = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(user).then(() =>
    console.log("User data have been saved")
  );
  await Book.bulkCreate(books).then(() =>
    console.log("Book data have been saved")
  );
};

if (process.env.SEED) {
  insertDB();
}
module.exports = insertDB;

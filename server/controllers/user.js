const { User } = require("../models");
const getUserData = async (req, res) => {
  const { UserId } = req.user;
  const user = await User.findOne({
    where: {
      id: UserId,
    },
  });
  res.send({
    status: 200,
    data: {
      user,
    },
    msg: "Successful get user data",
  });
};
module.exports = { getUserData };

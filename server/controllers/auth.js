const { hash, compare } = require("bcrypt");
const { signUpValidator, loginValidator } = require("../validation");
const { User } = require("../models");
const { serverErrs } = require("../helpers/customError");
const generateToken = require("../helpers/generateToken");

const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  await signUpValidator.validate({ firstName, lastName, email, password });
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) throw serverErrs.BAD_REQUEST("email is already used");

  const hashedPassword = await hash(password, 12);

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  const { id } = newUser;
  const fullName=`${firstName} ${lastName}`
  const token = await generateToken({
    UserId: id,
    fullName,
  });
  res.send({
    status: 201,
    msg: "successful sign up",
    token: token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  await loginValidator.validate({ email, password });
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) throw serverErrs.BAD_REQUEST("Email not found");

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) throw serverErrs.BAD_REQUEST("Wrong Email Or Password");

  const { id, firstName, lastName } = user;
  const token = await generateToken({
    UserId: id,
    fullName: `${firstName} ${lastName}`,
  });

  res.send({
    status: 200,
    msg: "successful login",
    token: token,
  });
};

module.exports = {
  signUp,
  login,
};

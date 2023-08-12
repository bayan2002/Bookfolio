const yup = require("yup");

const signUpValidator = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

const loginValidator = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
  });

  module.exports={
    signUpValidator,
    loginValidator
  }
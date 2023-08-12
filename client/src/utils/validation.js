export const requiredValidator = (value) => {
  if (
    value == null ||
    value === false ||
    value.length === 0 ||
    value.trim() === ""
  ) {
    return "This field is required";
  }

  return true;
};

export const emailValidator = (value) => {
  if (!value) {
    return true;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(String(value));

  return isValid || "Please enter a valid email address";
};

export const passwordValidator = (password) => {
  const isValidPassword = password.length >= 8;
  return isValidPassword || "Password must be at least 8 characters";
};

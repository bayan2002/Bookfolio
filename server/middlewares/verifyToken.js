const { serverErrs } = require("../helpers/customError");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      next(serverErrs.UNAUTHORIZED("unauthorized1"));
    } else {
      const token = authHeader.split(" ")[1];

      if (!token) {
        next(serverErrs.UNAUTHORIZED("unauthorized"));
      } 
      else {
        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("decoded: ", decoded);
        req.user = decoded;
        next();
      }
    }
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError && error.message === 'jwt malformed') {
      next(serverErrs.UNAUTHORIZED("unauthorized"));
    }
    next(error);
  }
};

module.exports = verifyToken;

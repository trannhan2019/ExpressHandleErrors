const { validationResult } = require("express-validator");
const ValidationError = require("../errors/validation.error");

const ValidateHandleMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ValidationError(errors);
  }
  next();
};

module.exports = ValidateHandleMiddleware;

module.exports = class ValidationError extends Error {
  constructor(msg) {
    super();
    this.status = 422;
    this.messageObject = msg;
  }
};

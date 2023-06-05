module.exports = class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.status = 400;
  }
};

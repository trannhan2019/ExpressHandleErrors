const userModel = require("../models/user.model");
const asyncHandler = require("express-async-handler");
// const ValidationError = require("../errors/validation.error");
const NotFoundError = require("../errors/notfound.error");

const addUser = asyncHandler(async (req, res) => {
  const { name, sex } = req.body;

  const user = new userModel({ name, sex });
  await user.save();
  res.json({ user });
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) {
    throw new NotFoundError("user not found");
  }

  res.json({ user });
});

module.exports = { getUserById, addUser };

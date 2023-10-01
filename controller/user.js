const User = require("../model/user");

const GETALL = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

const GET = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json(user);
};

const REPLACE = async (req, res) => {
  const id = req.params.id;
  try {
    const replaceUser = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(205).json(replaceUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const UPDATE = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(206).json(updateUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const DELETE = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteUser = await User.findOneAndDelete({ _id: id });
    res.status(205).json(deleteUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  GETALL,
  GET,
  REPLACE,
  UPDATE,
  DELETE,
};

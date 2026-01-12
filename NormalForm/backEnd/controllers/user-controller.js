const User = require("../models/user-model")

// create user
const createUser = async (req, res) => {
 try {
  const user = await User.create(req.body);
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
};

// Get All users
const getUsers = async (req, res) => {
 try {
  const users = await user.find();
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
};

// Update
const updateUser = async (req, res) => {
 try {
  const user = await user.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  );
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
};

//Delete
const deleteUser = async (req, res) => {
 try {
await user.findByIdAndDelete(req.params.id);
 } catch (error) {
  res.status(500).json({message: error.message});
 }
};

module.exports = {
 createUser,
 getUsers,
 updateUser,
 deleteUser,
};
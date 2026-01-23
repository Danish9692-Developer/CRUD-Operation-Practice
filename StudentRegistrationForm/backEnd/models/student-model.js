const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
 firstName: {
  type: String,
  required: true,
  trim: true,
 },

 middleName: {
  type: String,
  required: true,
  trim: true,
 },

 lastName: {
  type: String,
  required: true,
  trim: true,
 },

 email: {
  type: String,
  required: true,
  unique: true,
  trim: true
 },

 contact: {
  type: String,
  required: true,
 },

 gender: {
  type: String,
  enum: ["male", "female", "transgender", "pangender"],
  required: true
 },

 studentClass: {
  type: String,
  required: true
 },

 studentId: {
  type: String,
  required: true,
  unique: true
 }

},
{timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
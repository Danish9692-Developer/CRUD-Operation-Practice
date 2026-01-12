const mongoose= require("mongoose");

const userSchema = new mongoose.Schema ({
 name: String,
 surname: String,
 age: Number,
 phone: Number
});

module.exports = mongoose.model("user", userSchema);
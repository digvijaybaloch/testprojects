const mongoose = require("mongoose");
//const Schema = ;

const userSchema = new mongoose.Schema({
	googleId: String
});

module.exports = mongoose.model("users", userSchema);

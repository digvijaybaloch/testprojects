const mongoose = require("mongoose");
//const Schema = ;

const userSchema = new mongoose.Schema({
	googleId: String
});

//mongoose.model("users", userSchema);
module.exports = mongoose.model("users", userSchema);

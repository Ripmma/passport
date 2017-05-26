var mongoose = require("mongoose");

var User = new mongoose.Schema({
	username: String,
	password: String
});

module.exports = mongoose.model("User", User);
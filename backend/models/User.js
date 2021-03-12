const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	cpf: { type: String, required: true, unique: true },
	height: { type: Number, required: true },
	weight: { type: Number, required: true },
	email: { type: String, required: true, unique: true },
	userNumber: { type: String, required: true },
	contact: [
		{
			name: String,
			number: String,
			relationship: String,
		},
	],
	birthday: { type: Number, required: true },
});

module.exports = mongoose.model("User", UserSchema);



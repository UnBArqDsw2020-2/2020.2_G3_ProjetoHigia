import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	cpf: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	contact: [
		{
			name: String,
			number: String,
			relationship: String,
		},
	],
	birthday: { type: Date, required: true },
	crm: { type: String, default: null },
	photo: String,
	socketId: Number,
	accessRequestedCRMs: [ String ],
	accessAllowedCRMs: [ String ],
});

export default mongoose.model("User", UserSchema);

import mongoose from "mongoose";

const ArchiveSchema = new mongoose.Schema({
	cpf: { type: String, required: true, unique: true },
	documents: {
		exams: [
			{
				title: String,
				files: [
					{ name: String, base64: String, extension: String, update: Date },
				],
			},
		],
		doctorAccess: [{ crm: String, lastAccess: Date }],
	},
});

export default mongoose.model("Archive", ArchiveSchema);

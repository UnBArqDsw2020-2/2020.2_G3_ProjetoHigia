const mongoose = require("mongoose");

const MedicalReportSchema = new mongoose.Schema({
	cpf: { type: String, required: true, unique: true },
	medicines: [String],
	comorbidities: [String],
	smoker: Boolean,
	foodRestriction: [String],
	allergies: [String],
	exams: [String],
});

module.exports = mongoose.model("MedicalReport", MedicalReportSchema);

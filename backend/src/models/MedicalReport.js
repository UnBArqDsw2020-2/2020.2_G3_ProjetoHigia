import mongoose from "mongoose";

const MedicalReportSchema = new mongoose.Schema({
	cpf: { type: String, required: true, unique: true },
	medicines: [String],
	comorbidities: [String],
	smoker: Boolean,
	foodRestriction: [String],
	allergies: [String],
	exams: [String],
});

export default mongoose.model("MedicalReport", MedicalReportSchema);

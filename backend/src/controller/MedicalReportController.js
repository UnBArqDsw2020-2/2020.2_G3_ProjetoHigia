import mongoose from "mongoose";
import MedicalReportBase from "../Database/MedicalReportBase";

class MedicalReportController {
	async createMedicalReport(req, res) {
		const medicalReportInfo = req.body;
		await MedicalReportBase.create(medicalReportInfo)
			.then(() => {
				return res.status(200).json({ status: "Success" });
			})
			.catch((e) => {
				return res.status(400).json({ status: "Failed", data: e.message });
			});
	}

	async findOneMedicalReport(req, res) {
		const cpf = req.query;
		const user = await MedicalReportBase.findOne(cpf);
		if (user) return res.status(200).json({ status: "Success", data: user });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Ficha medica não encontrada" });
	}

	async updateMedicalReport(req, res) {
		const { id, data } = req.body;
		const user = await MedicalReportBase.updateOne({ id }, data);
		if (user.nModified) return res.status(200).json({ status: "Success" });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Ficha medica não modificada" });
	}
}

export default new MedicalReportController();

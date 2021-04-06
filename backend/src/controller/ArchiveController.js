import mongoose from "mongoose";
import ArchiveBase from "../Database/ArchiveBase";

class ArchiveController {
	async createArchive(req, res) {
		const archiveData = req.body;
		await ArchiveBase.create(archiveData)
			.then(() => {
				return res.status(200).json({ status: "Success" });
			})
			.catch((e) => {
				return res.status(400).json({ status: "Failed", data: e.message });
			});
	}

	async findOneArchive(req, res) {
		const cpf = req.query;
		const user = await ArchiveBase.findOne(cpf);
		if (user) return res.status(200).json({ status: "Success", data: user });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Arquivo não encontrado" });
	}

	async updateArchive(req, res) {
		const { id, data } = req.body;
		const user = await ArchiveBase.updateOne({ id }, data);
		if (user.nModified) return res.status(200).json({ status: "Success" });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Arquivo não encontrado" });
	}

	async createNewExam(req, res) {
		const { cpf, name, base64, title, extension } = req.body;
		await ArchiveBase.createExam({ cpf: cpf }, name, base64, title, extension)
			.then(() => {
				return res.status(200).json({ status: "Success" });
			})
			.catch(() => {
				console.log();
				return res.status(400).json({ status: "Failed" });
			});
	}

	async updateExam(req, res) {
		const { cpf, name, base64, title, extension, idFile, idExam } = req.body;
		await ArchiveBase.updateExam(
			{ cpf: cpf },
			idFile,
			name,
			base64,
			idExam,
			title,
			extension
		)
			.then(() => {
				return res.status(200).json({ status: "Success" });
			})
			.catch(() => {
				console.log();
				return res.status(400).json({ status: "Failed" });
			});
	}
}

export default new ArchiveController();

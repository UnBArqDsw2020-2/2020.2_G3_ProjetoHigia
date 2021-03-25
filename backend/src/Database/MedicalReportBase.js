import MedicalReport from "../models/MedicalReport";
import Base from "./Base";
import moment from "moment-timezone";

class MedicalReportBase extends Base {
	constructor(collectionType) {
		super(collectionType);
	}

	async createExam(cpf, name, base64) {
		let medicalReport = await this.collectionType.findOne(cpf);
		if (medicalReport) {
			if (!name) {
				const date = moment().format("DD-MM-YYYYThh:mm");
				name = `Exame_${date}`;
			}
			medicalReport.exams.forEach((exam) => {
				if (exam.name === name) {
					throw Error("Nome de arquivo já existente");
				}
			});
			medicalReport.exams.push({ name: name, base64: base64 });
			await this.collectionType.updateOne(cpf, medicalReport);
		} else throw Error("Não foi possível criar o exame");
	}

	async editExam(cpf, id, name, base64) {
		let medicalReport = await this.collectionType.findOne(cpf);
		let dataBaseUpdated = false;
		if (medicalReport) {
			medicalReport.exams.forEach((exam) => {
				if (JSON.stringify(exam._id) === JSON.stringify(id)) {
					if (name) {
						exam.name = name;
					}
					if (base64) {
						exam.base64 = base64;
					}
					dataBaseUpdated = true;
					this.collectionType.updateOne(cpf, medicalReport);
				}
			});
		}
		if (!dataBaseUpdated) {
			throw Error("Não foi possível editar o exame");
		}
	}

	async deleteExam(cpf, id) {
		let medicalReport = await this.collectionType.findOne(cpf);
		if (medicalReport) {
			const examUpdated = medicalReport.exams.filter(
				(exam) => JSON.stringify(exam._id) !== JSON.stringify(id)
			);
			medicalReport.exams = examUpdated;
			await this.collectionType.updateOne(cpf, medicalReport);
		} else throw Error("Não foi possível deletar o exame");
	}
}

export default new MedicalReportBase(MedicalReport);

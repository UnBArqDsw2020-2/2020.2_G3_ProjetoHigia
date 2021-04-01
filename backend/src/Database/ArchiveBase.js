import Base from "./Base";
import moment from "moment-timezone";
import Archive from "../models/Archive";

class ArchiveBase extends Base {
	constructor(collectionType) {
		super(collectionType);
	}

	async createExam(cpf, name, base64, title, extension) {
		let userArchive = await this.collectionType.findOne(cpf);
		if (userArchive) {
			const date = moment().format("DD-MM-YYYY-hh:mm");
			if (!name) {
				name = `Exame_${date}`;
			}
			let file = userArchive.documents.exams.find(
				(exam) => exam.title === title
			);
			if (file) {
				const index = userArchive.documents.exams.indexOf(file);
				const files = userArchive.documents.exams[index].files;
				const repeatedName = files.find((file) => file.name === name);
				if (repeatedName) {
					throw Error("Nome já existente");
				}
				userArchive.documents.exams[index].files.push({
					name: name,
					base64: base64,
					extension: extension,
					update: date,
				});
			} else {
				userArchive.documents.exams.push({
					title: title,
					files: [
						{
							name: name,
							base64: base64,
							extension: extension,
							update: date,
						},
					],
				});
			}
			await this.collectionType.updateOne(cpf, userArchive);
		} else throw Error("Não foi possível criar o exame");
	}

}

export default new ArchiveBase(Archive);

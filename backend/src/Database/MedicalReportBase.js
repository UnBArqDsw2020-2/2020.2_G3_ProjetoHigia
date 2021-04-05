import MedicalReport from "../models/MedicalReport";
import Base from "./Base";
import moment from "moment-timezone";

class MedicalReportBase extends Base {
	constructor(collectionType) {
		super(collectionType);
	}
}

export default new MedicalReportBase(MedicalReport);

import MedicalReport from "../models/MedicalReport";
import Base from "./Base";

class MedicalReportBase extends Base {
	constructor(collectionType) {
		super(collectionType);
	}
}

export default MedicalReportBase(MedicalReport);

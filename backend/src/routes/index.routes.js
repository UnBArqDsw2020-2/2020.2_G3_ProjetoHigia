import UserRoute from "./User.routes";
import MedicalReport from "./MedicalReport.routes";
import Archive from "./Archive.routes";
import Access from "./Access.routes";

const setUpRoute = (app) => {
	app.use("/api", [UserRoute, MedicalReport, Archive, Access]);
};

export default setUpRoute;

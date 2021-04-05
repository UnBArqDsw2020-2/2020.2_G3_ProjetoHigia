import UserRoute from "./User.routes";
import MedicalReport from "./MedicalReport.routes";
import Archive from "./Archive.routes";

const setUpRoute = (app) => {
	app.use("/api", [UserRoute, MedicalReport, Archive]);
};

export default setUpRoute;

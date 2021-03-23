import UserRoute from "./User.routes";
import MedicalReport from "./MedicalReport.routes";


const setUpRoute = (app) => {
	app.use("/api", [UserRoute, MedicalReport]);
};

export default setUpRoute;

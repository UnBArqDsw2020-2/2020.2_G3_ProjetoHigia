import UserRoute from "./User.routes";

const setUpRoute = (app) => {
	app.use("/api", [UserRoute]);
};

export default setUpRoute;

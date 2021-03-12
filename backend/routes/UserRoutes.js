const express = require("../config/customExpress");
const User = require("../models/User");

const routes = express();

routes.get("/", (req, res) => {
	return res.send("Teste");
});

routes.post("/", async (req, res) => {
	await User.create(req.body);
	return res.send("Terminou");
});

module.exports = routes;

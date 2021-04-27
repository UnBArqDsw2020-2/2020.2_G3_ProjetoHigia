import SetupServer from "./config/SetupServer";
import http from "http";

const server = new SetupServer();
const express = http.Server(server.getApp());

express.listen(3000, () => {
	server.connectDatabase();
	console.log("Server Up");
});

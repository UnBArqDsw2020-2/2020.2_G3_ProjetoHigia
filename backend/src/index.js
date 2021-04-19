import SetupServer from "./config/SetupServer";
import http from "http";
import { setUpSocket } from "./webSocket";
require("dotenv").config();

const server = new SetupServer();
const express = http.Server(server.getApp());
setUpSocket(express);

express.listen(3000, () => {
	server.connectDatabase();
	console.log("Server Up");
});

import SetupServer from './config/SetupServer';

const server = new SetupServer();
const express = server.getApp();

express.listen(3000, () => {
	server.connectDatabase();
	console.log("Server Up");
});

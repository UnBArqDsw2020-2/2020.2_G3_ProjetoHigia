import socketio from "socket.io";
import UserBase from "./Database/UserBase";

let io;
export const setUpSocket = (server) => {
	io = socketio(server);

	io.on("connection", (socket) => {
		console.log("a user connected :D");
		socket.on("chat message", (msg) => {
			console.log(msg);
			io.emit("chat message", msg);
		});
	});
};


import socketio from "socket.io";

let io;
const setUpSocket = (server) => {
	io = socketio(server);

	io.on("connection", (socket) => {
		console.log("a user connected :D");
		socket.on("chat message", (msg) => {
			console.log(msg);
			io.emit("chat message", msg);
		});
	});
};

const sendRequestMessage = (socketID, crm) => {
	io.to(socketID).send("accessRequested", crm)
};


export { setUpSocket, sendRequestMessage }
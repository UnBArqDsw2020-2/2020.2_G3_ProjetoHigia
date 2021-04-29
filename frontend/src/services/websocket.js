import socketio from "socket.io-client";
import Constants from 'expo-constants';
const { manifest } = Constants;

const ipAddress = manifest.debuggerHost.split(`:`).shift().concat(`:3000`);

class WebSocket {
  constructor() {
    this.socket = socketio(`http://${ipAddress}`, {
      autoConnect: true,
      transports: ["websocket", "polling", "flashsocket"],
    });
  }

  connect(idUser = "Teste") {
      console.log("Tegasddvghjkvjk");
    this.socket.io.opts.query = {
      idUser,
    };
    console.log(this.socket.connect());
    console.log("connected:", this.socket.connected)
  }

  disconnect() {
    if (this.socket.connected) {
      this.socket.disconnect();
    }
  }
}

export default new WebSocket();

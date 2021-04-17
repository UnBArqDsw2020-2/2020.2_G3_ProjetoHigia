import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import setUpRoute from "../routes/index.routes";
import http from "http";
import { setUpSocket } from "../webSocket";

class SetupServer {
	constructor() {
		this._app = express();
		this.config();
		this.routes();
	}

	config() {
		this._app.use(express.urlencoded({ extended: true }));
		this._app.use(express.json());
		this._app.use(cors());
	}

	routes() {
		setUpRoute(this._app);
	}

	connectDatabase() {
		dotenv.config();
		mongoose
			.connect(process.env.CONNECTION_STRING, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
			})
			.then(() => {
				console.log("Database connected successfully");
			})
			.catch(() => {
				console.log("Database connection failed");
			});
	}

	setUpSocket() {
		const server = http.Server(this._app);
		setUpSocket(server);
	  }

	getApp() {
		return this._app;
	}
}

export default SetupServer;

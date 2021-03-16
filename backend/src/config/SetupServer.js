import express from "express";
import admin from "firebase-admin";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import serviceAccount from "./serviceAccountKey.json";
import setUpRoute from "../routes/index.routes";

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

	connectFirebase() {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		});
	}

	getApp() {
		return this._app;
	}
}

export default SetupServer;

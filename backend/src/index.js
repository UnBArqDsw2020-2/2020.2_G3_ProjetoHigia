import mongoose from "mongoose";
import admin from "firebase-admin";
import express from "express";
import serviceAccount from "./config/serviceAccountKey.json";
import UserRoute from "./routes/User.routes";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import User from "./models/User";

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(UserRoute);
app.listen(3000, () => {
	admin
		.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		})

	mongoose.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}).then(() => {
		console.log("Database connected successfully");
	})	
	.catch(() => {
		console.log("Database connection failed");
	});

	console.log("Server Up");
});

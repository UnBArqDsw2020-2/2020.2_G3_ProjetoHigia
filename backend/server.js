const mongoose = require("mongoose");
const admin = require("firebase-admin");
const express = require("./config/customExpress");
const serviceAccount = require("./config/serviceAccountKey.json");
const userRoute = require("./routes/UserRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(userRoute);

app.listen(3001, () => {
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

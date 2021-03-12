const mongoose = require("mongoose");
const admin = require("firebase-admin");
const express = require("./config/customExpress");
const serviceAccount = require("./config/serviceAccountKey.json");
const userRoute = require("./routes/UserRoutes");
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(
	process.env.CONNECTION_STRING,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const app = express();

app.use(userRoute);

app.listen(3000, () => {
	console.log("Server Up");
});

import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

class Firebase {
	constructor() {
		this._firebase = admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		});
	}
	async createUser(data) {
		await this._firebase
			.auth()
			.createUser({ email: data.email, password: data.password });
	}
	async isAuthenticated(req, res, next) {
		try {
			const token = req.headers.authorization.split(" ")[1].split('"')[1];
			const idToken = await admin.auth().verifyIdToken(token);
			req.decodedToken = idToken;
			return next();
		} catch (e) {
			return res.status(400).json({ error: "Usuário não autorizado" });
		}
	}
}

export default new Firebase();

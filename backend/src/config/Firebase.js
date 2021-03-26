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
}

export default new Firebase();

import UserBase from "../Database/UserBase";
import Firebase from "../config/Firebase";
class UserController {
	async createUser(req, res) {
		const newUserInfo = req.body;
		await UserBase.create(newUserInfo)
			.then(() => {
				Firebase.createUser(newUserInfo);
				return res.status(200).json({ status: "Success" });
			})
			.catch((e) => {
				return res.status(400).json({ status: "Failed", data: e.message });
			});
	}

	async findOneUser(req, res) {
		const query = req.query;
		const user = await UserBase.findOne(query);
		if (user) return res.status(200).json({ status: "Success", data: user });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Usuário não encontrado" });
	}

	async updateUser(req, res) {
		const { id, data } = req.body;
		const user = await UserBase.updateOne({ id }, data);
		if (user.nModified) return res.status(200).json({ status: "Success" });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Usuário não modificado" });
	}
}

export default new UserController();

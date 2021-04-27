import UserBase from "../Database/UserBase";
import Firebase from "../config/Firebase";
class UserController {
	async createUser(req, res) {
		const newUserInfo = req.body;
		newUserInfo.email = newUserInfo.email.toLowerCase(); 
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
		if (user) return res.status(200).json(user);
		else
			return res
				.status(200)
				.json({error: true})
	}

	async updateUser(req, res) {
		const { cpf, data } = req.body;
		const user = await UserBase.updateOne({ cpf }, data);
		if (user.nModified) return res.status(200).json({ status: "Success" });
		else
			return res
				.status(200)
				.json({ status: "Failed", data: "Usuário não modificado" });
	}
}

export default new UserController();

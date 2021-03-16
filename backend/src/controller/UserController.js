import UserBase from "../Database/UserBase";

class UserController {
	createUser(req, res) {
		const newUserInfo = req.body;
		UserBase.create(newUserInfo)
			.then(() => {
				return res.status(200).json({ status: "Success" });
			})
			.catch((e) => {
				return res.status(400).json({ status: "Failed", data: e.message });
			});
	}

	async findOneUser(req, res) {
		const { cpf } = req.body;
		const user = await UserBase.findOne({ cpf });
		if (user) return res.status(200).json({ status: "Success", data: user });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Usuário não encontrado" });
	}

	async updateUser(req, res) {
		const { cpf, data } = req.body;
		const user = await UserBase.updateOne({ cpf }, data);
		if (user.nModified) return res.status(200).json({ status: "Success" });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Usuário não modificado" });
	}
}

export default new UserController();

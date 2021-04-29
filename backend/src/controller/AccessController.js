import UserBase from "../Database/UserBase";
import { sendRequestMessage } from "../webSocket";

class AcessController {
	async requestAcess(req, res) {
		const { id, crm } = req.body;
		console.log("requesting access", { id }, crm);
		const user = await UserBase.appendRequestAccess({ id }, crm);
		if (!user.nModified)
			return res
				.status(400)
				.json({ status: "Failed", data: "Usuário não modificado" });

		sendRequestMessage(crm);

		return res.status(200).json({ status: "Success" });
	}

	async allowAccess(req, res) {
		const { id, crm } = req.body;
		const user = await UserBase.allowRequestAccess({ id }, crm);
		if (user.nModified) return res.status(200).json({ status: "Success" });
		else
			return res
				.status(400)
				.json({ status: "Failed", data: "Usuário não modificado" });
	}
}

export default new AcessController();

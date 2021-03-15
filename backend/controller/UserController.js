const UserBase = require("../Database/UserBase");

class UserController {
	createUser(req, res) {
		const newUserInfo = req.body;
		try {
			UserBase.createUser(newUserInfo);
			return res.status(200);
		} catch (e) {
			return res.status(400).json({ message: error.message });
		}
	}

	findOneUser(req, res) {
		const user = req.body;
		try {
			UserBase.findOne(user);
			return res.status(200);
		} catch (e) {
			return res.status(400).json({ message: error.message });
		}
	}

	updateUser(req, res) {
		const user = req.body;
		try {
			UserBase.update(user);
			return res.status(200);
		} catch (e) {
			return res.status(400).json({ message: error.message });
		}
	}
}

module.exports = { UserController };

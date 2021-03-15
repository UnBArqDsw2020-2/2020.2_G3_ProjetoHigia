const express = require("../config/customExpress");
const UserController = require("../controller/UserController");
const isAuthenticated = require("../middleware/firebaseAuth");

const routes = express();

routes.post("/", () => UserController.createUser);
routes.get("/user/:id", isAuthenticated, () => UserController.findOneUser);
routes.put("/user/:id", isAuthenticated, () => UserController.updateUser);

module.exports = routes;

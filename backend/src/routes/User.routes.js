import express from "express";
import Firebase from "../config/Firebase";
import UserController from "../controller/UserController";
import isAuthenticated from "../middleware/isAuthenticated";

const routes = express.Router();
// Rota de criar novo usuário
// Passar dados com Body
routes.post("/user", UserController.createUser);

// Rota de buscar usuário
// Passar dados com Query
routes.get("/user", isAuthenticated, UserController.findOneUser);

//Rota de atualizar usuário
// Passar dados com Body
routes.put("/user", isAuthenticated, UserController.updateUser);

export default routes;

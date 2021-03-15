import express from "express";
import UserController from "../controller/UserController";

const routes = express.Router();
// Rota de criar novo usuário
routes.post("/user", UserController.createUser);

// Rota de buscar usuário
routes.get("/user", UserController.findOneUser);

//Rota de atualizar usuário
routes.put("/user", UserController.updateUser);

export default routes;

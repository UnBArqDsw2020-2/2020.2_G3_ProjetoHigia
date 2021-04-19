import express from "express";
import AccessController from "../controller/AcessController";

const routes = express.Router();

routes.post("/requestFullAccess", AccessController.requestAcess);
routes.post("/allowAccess", AccessController.allowAccess);

export default routes;

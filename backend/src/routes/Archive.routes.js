import express from "express";
import ArchiveController from "../controller/ArchiveController";

const routes = express.Router();

routes.post("/archive", ArchiveController.createArchive);
routes.post("/archive/exam", ArchiveController.createNewExam);
// routes.get("/archive", ArchiveController.deleteExam);

export default routes;

import express from "express";
import ArchiveController from "../controller/ArchiveController";

const routes = express.Router();

routes.post("/archive", ArchiveController.createArchive);
routes.post("/archive/exam", ArchiveController.createNewExam);
routes.put("/archive/exam", ArchiveController.updateExam);
routes.delete("/archive/exam", ArchiveController.deleteExam);
routes.get("/archive", ArchiveController.findOneArchive);

export default routes;

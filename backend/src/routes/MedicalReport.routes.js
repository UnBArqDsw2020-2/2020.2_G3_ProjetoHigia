import express from "express";
import MedicalReportController from "../controller/MedicalReportController";

const routes = express.Router();

routes.post("/medicalReport", MedicalReportController.createMedicalReport);
routes.get("/medicalReport", MedicalReportController.findOneMedicalReport);


export default routes;

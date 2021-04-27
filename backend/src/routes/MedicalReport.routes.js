import express from "express";
import MedicalReportController from "../controller/MedicalReportController";

const routes = express.Router();

routes.post("/medicalReport", MedicalReportController.createMedicalReport);
routes.get("/medicalReport", MedicalReportController.findOneMedicalReport);
routes.put("/medicalReport", MedicalReportController.updateMedicalReport);


export default routes;

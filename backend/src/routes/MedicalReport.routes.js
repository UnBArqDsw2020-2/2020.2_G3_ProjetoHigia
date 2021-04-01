import express from "express";
import MedicalReportController from "../controller/MedicalReportController";

const routes = express.Router();

routes.post("/medicalReport", MedicalReportController.createMedicalReport);


export default routes;

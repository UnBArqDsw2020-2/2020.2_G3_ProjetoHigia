import express from "express";
import Firebase from "../config/Firebase";
import MedicalReportController from "../controller/MedicalReportController";

const routes = express.Router();

routes.post("/medicalReport", MedicalReportController.createMedicalReport);
routes.post("/medicalReport/exam", MedicalReportController.createNewExam);
routes.put("/medicalReport/exam", MedicalReportController.editExam);
routes.delete("/medicalReport/exam", MedicalReportController.deleteExam);



export default routes;

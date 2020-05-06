import { Router } from "express";
import DrugController from "../controllers/DrugController";

const router = Router();

router.get("/", DrugController.getAllDrugs);

export default router;

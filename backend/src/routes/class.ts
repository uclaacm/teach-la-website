import { Router } from "express";
import { getClasses, createClass } from "../controllers/classController.js"

const router = Router();

router.get("/", getClasses);
router.post("/", createClass);

// /api/classes
export default router;
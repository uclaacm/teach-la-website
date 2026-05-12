import { Router } from "express";
import { getUsers, createUser } from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

// /api/users
export default router;

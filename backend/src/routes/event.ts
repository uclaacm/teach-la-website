import { Router } from "express";
import { createEvent, getEvents } from "../controllers/eventController"; 

const router = Router();

router.get("/", getEvents);
router.post("/", createEvent);

// api/events
export default router;
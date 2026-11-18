import { Router } from "express";
import { createEvent, getEvents, updateEvent } from "../controllers/eventController.js";

const router = Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.patch("/:id", updateEvent);

// api/events
export default router;

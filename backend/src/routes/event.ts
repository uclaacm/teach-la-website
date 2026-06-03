import { Router } from "express";
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEventByLink,
  getEvents,
  updateEvent,
} from "../controllers/eventController.js";

const router = Router();

router.get("/", getEvents);
router.get("/by-link", getEventByLink);
router.get("/:id", getEventById);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;

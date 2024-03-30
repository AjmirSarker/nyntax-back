import express from "express";

import { CarController } from "./cars.controller.js";
const router = express.Router();
router.get("/", CarController.getAllCars);

export const CarRouter = router;







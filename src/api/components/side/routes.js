import express from "express";

const sideRouter = express.Router();

import { getSide } from "./controller.js";

sideRouter.get("/sides", getSide);

export default sideRouter;

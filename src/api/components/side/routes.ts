import express from "express";

const sideRouter = express.Router();

import { getSide } from "./controller.ts";

sideRouter.get("/sides", getSide);

export default sideRouter;

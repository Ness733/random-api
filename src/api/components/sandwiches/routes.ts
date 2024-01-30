import express from "express";

const sandwichesRouter = express.Router();

import { getSandwiches } from "./controller.ts";

sandwichesRouter.get("/sandwiches", getSandwiches);

export default sandwichesRouter;

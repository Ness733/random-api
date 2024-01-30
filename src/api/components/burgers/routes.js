import express from "express";

const burgerRouter = express.Router();

import { getBurgers } from "./controller.js";

burgerRouter.get("/burgers", getBurgers);

export default burgerRouter;

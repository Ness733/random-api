import express from "express";

const burritosRouter = express.Router();

import { getBurritos } from "./controller.js";

burritosRouter.get("/burritos", getBurritos);

export default burritosRouter;

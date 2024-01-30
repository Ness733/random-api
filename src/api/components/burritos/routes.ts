import express from "express";

const burritosRouter = express.Router();

import { getBurritos } from "./controller.ts";

burritosRouter.get("/burritos", getBurritos);

export default burritosRouter;

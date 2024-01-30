import express from "express";
import helmet from "helmet";
import cors from "cors";

import db from "./config/globals.js";

// Routers
import burgerRouter from "./api/components/burgers/routes.js";
import sideRouter from "./api/components/side/routes.js";
import burritosRouter from "./api/components/burritos/routes.js";
import sandwichRouter from "./api/components/sandwiches/routes.js";

const app = express();

const port = process.env.PORT;

if (!process.env.DATABASE_PORT) {
	console.log("No port value specified...");
}

app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", burgerRouter);
app.use("/api", sideRouter);
app.use("/api", burritosRouter);
app.use("/api", sandwichRouter);

app.get("/api", (req, res) => {
	res.json({ message: "Hello World!" });
});

try {
	await db.authenticate();
	console.log("Connection has been established successfully.");
} catch (error) {
	console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

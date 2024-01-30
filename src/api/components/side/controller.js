import Side from "./model.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getSide(req, res) {
	try {
		const sides = await Side.findAll();
		res.status(200).json(sides);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

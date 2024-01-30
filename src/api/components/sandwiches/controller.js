import Sandwiches from "./model.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getSandwiches(req, res) {
	try {
		const sandwiches = await Sandwiches.findAll();
		res.status(200).json(sandwiches);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

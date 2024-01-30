import Burritos from "./model.js";

import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getBurritos(req, res) {
	try {
		const burritos = await Burritos.findAll();
		res.status(200).json(burritos);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

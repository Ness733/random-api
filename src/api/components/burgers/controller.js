import Burgers from "./model.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getBurgers(req, res) {
	try {
		const burgers = await Burgers.findAll();
		res.status(200).json(burgers);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

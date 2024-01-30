import Sandwiches from "./model.ts";
import { Request, Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getSandwiches(req: Request, res: Response) {
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

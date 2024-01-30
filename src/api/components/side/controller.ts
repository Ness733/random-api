import Side from "./model.ts";
import { Request, Response } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getSide(req: Request, res: Response) {
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

import { DataTypes } from "sequelize";
import db from "../../../config/globals.js";

const Sandwiches = db.define(
	"sandwich",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		active: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: "sandwiches",
		timestamps: false,
	}
);

export default Sandwiches;

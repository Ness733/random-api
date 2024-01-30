import { Sequelize } from "sequelize";

const db = new Sequelize(
	process.env.DATABASE_NAME as string,
	process.env.DATABASE_USERNAME as string,
	process.env.DATABASE_PASSWORD as string,
	{
		dialect: "postgres",
		host: process.env.DATABASE_HOST,
		port: 8081,
	}
);

export default db;

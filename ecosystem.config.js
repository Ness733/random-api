module.exports = {
	apps: [
		{
			name: "random-api",
			script: "start",
			watch: ".",
			env: {
				NODE_ENV: "production",
				PORT: 3002,
				DATABASE_PORT: 8081,
				DATABASE_HOST: "localhost",
				DATABASE_NAME: "postgres",
				DATABASE_USERNAME: "postgres",
				DATABASE_PASSWORD: "Krahe1990!",
				DATABASE_DIALECT: "postgres",
			},
		},
	],

	deploy: {
		production: {
			user: "root",
			host: "https://vps-3885150-x.dattaweb.com/",
			ref: "origin/master",
			repo: "GIT_REPOSITORY",
			path: "/var/www/random-api",
			"pre-deploy-local": "",
			"post-deploy":
				"npm install && pm2 reload ecosystem.config.js --env production",
			"pre-setup": "",
		},
	},
};

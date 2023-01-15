require("dotenv").config();

module.exports = {
  dialect: process.env.NEXT_DB_DIALECT || "postgres",
  username: process.env.NEXT_DB_USERNAME || "authStarter",
  password: process.env.NEXT_DB_PASSWORD || "authStarter",
  database: process.env.NEXT_DB_DATABASE || "authStarter",

  host: process.env.NEXT_DB_HOST || "localhost",
  port: +process.env.NEXT_DB_PORT || 5000,
  logging: false,

  ...(process.env.NEXT_DB_HOST
    ? {
      dialectOptions: {

        ssl: {
          required: true,
          rejectUnauthorized: false
        }
      }
    }
    : {})
};

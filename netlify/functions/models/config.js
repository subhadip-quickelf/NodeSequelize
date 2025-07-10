"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
console.log(process.env.DATABASE_NAME);
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_NAME || "", process.env.DATABASE_USER || "", process.env.DATABASE_PASS || "", {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dialect: "mysql",
});
sequelize
    .authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((err) => console.error("Unable to connect to the database:", err));
exports.default = sequelize;

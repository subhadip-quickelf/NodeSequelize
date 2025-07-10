import { Sequelize } from "sequelize";

const sequelize: Sequelize = new Sequelize("node_sequelize", "root", "root", {
	host: "localhost",
	port: 3300,
	dialect: "mysql",
});

sequelize
	.authenticate()
	.then(() => console.log("Connection has been established successfully."))
	.catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;

import express, { Request, Response } from "express";
import User from "./models/user";
require("./models");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, TypeScript Express!");
});

app.post("/user", async (req: Request, res: Response) => {
	try {
		const user = await User.build({
			name: req.body.name,
			email: req.body.email,
		});
		await user.save();
		res.status(201).send(user.toJSON());
	} catch (err) {
		res.status(500).send(err);
	}
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

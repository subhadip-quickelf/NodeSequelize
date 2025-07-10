import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "./config";

// Define the attributes of the User model
interface UserAttributes {
	id: string;
	name: string;
	email: string;
}

// Specify which fields are optional when creating a new user
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Extend Sequelize's Model class with our interfaces
class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	public id!: string;
	public name!: string;
	public email!: string;
}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: "User",
		// timestamps: false,
		createdAt: "created",
		updatedAt: false,
	}
);

export default User;

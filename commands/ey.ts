import { User, Message } from "discord.js";
import ICommand from "../interfaces/ICommand";

type eyCommandType = (user: User) => string;

type handlerType = (message: Message) => [User];

const ey: ICommand<eyCommandType, handlerType> = {
	command: "ey",
	description: "",
	name: "Saludo Ey!",
	execution: user => `Eyyyy <@${user.id}>!`,
	regex: /ey/i,
	paramHandler: ({ author }) => [author],
};

export default ey;

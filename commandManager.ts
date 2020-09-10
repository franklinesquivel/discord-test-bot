import commands from "./commands";
import ICommand from "./interfaces/ICommand";
import { ClientEvents, Message } from "discord.js";

type commandManagerType = (message: Message) => string | null;

const commandManager: commandManagerType = message => {
	const { content } = message;
	const res: ICommand | null =
		commands.find(c => c.regex.test(content)) ?? null;

	console.log(res);
	if (res !== null) {
		return res.execution(...res.paramHandler(message));
	} else {
		return null;
	}
};

export default commandManager;

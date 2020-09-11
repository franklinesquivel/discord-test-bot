import { User, Message } from "discord.js";
import ICommand from "../interfaces/ICommand";

type tulaCommandType = (user: User, to: string | null) => string;
type handlerType = (message: Message) => [User, string | null];

const execution: tulaCommandType = (user, to) => {
	const rnd = Math.random() * 25;

	const username = to === null ? `<@${user.id}>` : to;

	let xtra: string = "";

	if (rnd === 0) {
		xtra = "F";
	} else if (rnd <= 5) {
		xtra = `Nice dick bro`;
	} else if (rnd <= 10) {
		xtra = `Amigoooo`;
	} else if (rnd <= 15) {
		xtra = `Te enlistaste en los X-men?`;
	} else if (rnd <= 20) {
		xtra = `Carrera de 3 piernas? Por acá`;
	} else if (rnd <= 25) {
		xtra = `Con que ahí estaba la 3era Torre Gemela`;
	}

	return `A ${username} le mide ${rnd.toFixed(2)}cm. ${xtra}`;
};

const tula: ICommand<tulaCommandType, handlerType> = {
	command: "tula",
	description: "",
	name: "Te mide la tula",
	execution,
	regex: /tula/i,
	paramHandler: message => {
		const to: string | null = message.content.split(" ")[1] ?? null;
		const { author } = message;
		return [author, to];
	},
};

export default tula;

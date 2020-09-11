import ICommand from "../interfaces/ICommand";
export type tulaCommandType = () => string;

const execution: tulaCommandType = () => `Pong!`;

const pong: ICommand<tulaCommandType, () => void> = {
	name: "Pong",
	description: "",
	command: "pong",
	regex: /ping/i,
	execution,
	paramHandler: () => null,
};

export default pong;

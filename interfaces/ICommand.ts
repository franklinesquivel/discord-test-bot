import { Message } from "discord.js";
type _<K> = (message: Message) => [K];

export default interface ICommand<F extends Function = any, H = any> {
	name: string;
	description: string;
	command: string;
	execution: F;
	regex: RegExp;
	paramHandler: H;
}

import { Message } from "discord.js";

export type event = (message: Message) => void;

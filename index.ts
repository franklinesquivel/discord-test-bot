import { Client } from "discord.js";
import * as config from "./config.json";
import ey from "./commands/ey";
import pong from "./commands/pong";
import tula from "./commands/tula";
import commandsList from "./commands/commandsList";

const client = new Client();

client.on("message", ({ content, channel, author }) => {
    const lowerContent = content.toLowerCase();

    if (lowerContent.includes(config.prefix)) {
        //Is a command

        if (/ey/i.test(content)) {
            channel.send(ey(author));
        } else if (/ping/i.test(content)) {
            channel.send(pong());
        } else if (/tula/i.test(content)) {
            channel.send(tula(author));
        } else if (/commands|c/i.test(content)) {
            channel.send(commandsList());
        }
    }
});

client.login(config.token);

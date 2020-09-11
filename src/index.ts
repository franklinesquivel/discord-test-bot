import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { Client } from "discord.js";
import config from "./config";
import onMessage from "./events/onMessage";

const client = new Client();

client.on("message", onMessage);

client.on("men", () => console.log("ready!"));

client.login(config.token ?? undefined).catch(err => console.log(err));

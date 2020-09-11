import IConfig from "./interfaces/IConfig";
import { env } from "process";

const config: IConfig = {
    prefix: "$",
    token: process.env.DISCORD_TOKEN ?? null,
};

export default config;

import * as config from "../config.json";

const { availableCommands } = config;

const commandsList = () => {
    return `
    >>> ***Commands list***
    ${availableCommands.map((c) => `\`Command: ${c.command}\``)}
    `;
};

export default commandsList;

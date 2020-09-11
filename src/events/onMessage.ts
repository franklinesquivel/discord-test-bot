import { event } from "../types/event";
import commandManager from "../commandManager";
import config from "../config";

const onMessage: event = message => {
	const { content, channel } = message;

	if (content.includes(config.prefix)) {
		//Its a command
		const response = commandManager(message);

		if (response !== null) {
			channel.send(response);
		}
	}
};

export default onMessage;

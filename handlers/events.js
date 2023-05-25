import { readdirSync } from "fs";

module.exports = (client) => {

    readdirSync("./events").forEach(file => {
        if (!file.endsWith(".js")) return;

        const event = require(`../events/${file}`).default;

        event.once 
        ? client.once(event.name, (...args) => event.execute(...args)) 
        : client.on(event.name, (...args) => event.execute(...args));
    })
}
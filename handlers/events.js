const { readdirSync } = require("fs")

module.exports = (client) => {

    readdirSync("./events").forEach(file => {
        if (!file.endsWith(".js")) return;

        const event = require(`../events/${file}`);

        event.once 
        ? client.once(event.name, (...args) => event.run(...args)) 
        : client.on(event.name, (...args) => event.run(...args));
    })
}


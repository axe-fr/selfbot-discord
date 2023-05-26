const { readdirSync } = require("fs")

module.exports = (client) => {

    readdirSync("./events").forEach(file => {
        if (!file.endsWith(".js")) return;

        const event = require(`../events/${file}`).default;

        client.on(event.name, (...args) => event.execute(...args));
    })
}

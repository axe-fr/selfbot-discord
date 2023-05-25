import { Client, Collection } from'discord.js-selfbot-v13';
import { readdirSync } from "fs";


const config = require('./settings.json');
const password = config.password

const client = new Client({
  checkUpdate: false,
  autoRedeemNitro:true,
  password:password
});


client.on('ready', async () => {
console.log(`Connecté ${client.user.tag}!`);
});


client.commands = new Collection();
client.aliases = new Collection();


readdirSync("./handlers").forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


process.on('unhandledRejection', err => {
  console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(config.token)
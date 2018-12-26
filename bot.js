const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('527543176848736256').roles.find("name", "Epic Rainbo").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});




client.login(process.env.BOT_TOKEN);

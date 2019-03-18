const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Farouk ,The Best`,'https://www.twitch.tv/lspamer');
  console.log('BOT ONLINE');
});
client.login('NTA5NzQyMDQ2MDc3MjU1NzQz.Ds7khQ.tnjDP-fX9zah6Y-duGFR46Iz09I');
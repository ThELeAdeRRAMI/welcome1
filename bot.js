 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515891018088972290");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`*Welcome To* ***Fèarless*** *Server*..`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("517314499842408471");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`__ WēŁçØmĘ Ťö ** Last Night ** ŞėŘvËŕ... __`), 4000)        
}
});
client.login(process.env.BOT_TOKEN); 

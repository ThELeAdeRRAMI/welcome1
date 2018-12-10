 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520292865092616203");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(` **.. Welcome To, - __Future__ Community. :leaves::tulip:..** `), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("517314499842408471");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`__ WēŁçØmĘ Ťö ** Number One ** ŞėŘvËŕ... __`), 4000)        
}
});

client.on('message', msg => {
  if (msg.content === '**.. Welcome To, - __Future__ Community. :leaves::tulip:..**') {      
    msg.channel.send(".")
  }
});
client.login(process.env.BOT_TOKEN); 

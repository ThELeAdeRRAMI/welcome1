 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("512734412501155840");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`*Welcome To* ***Fèarless*** *Server*..`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("514147258795687938");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`__ WēŁçØmĘ Ťö ** ŤhË_ŁèĄđëŘş ** ŞėŘvËŕ... __`), 4000)        
}
});
client.login(process.env.BOT_TOKEN); 

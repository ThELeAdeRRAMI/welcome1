 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515891018088972290");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**** Welcome To HmasaT Server.. ***`), 4000)        
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("517314499842408471");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`__ WēŁçØmĘ Ťö ** Last Night ** ŞėŘvËŕ... __`), 4000)        
}
});

client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("515595619826663424").join(); //by : Toxic Codes
    });

client.login(process.env.BOT_TOKEN); 

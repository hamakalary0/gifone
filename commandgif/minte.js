const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
// .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(`https://media.discordapp.net/attachments/790836700561670145/838461806137442365/image0.gif`)
/// .setTitle(`link - https://top.gg/bot/814607957349629962`)
.setAuthor(`1Minte`)
.setDescription(`


await message.channel.send(`1`);

await message.channel.send(`2`);

await message.channel.send(`3`);

await message.channel.send(`4`);

await message.channel.send(`5`);

await message.channel.send(`6`);

await message.channel.send(`7`);

await message.channel.send(`8`);

await message.channel.send(`9`);









`)
    
message.channel.send({embed});
}






   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["1mint", "1minte"],
  permLevel: 0
};

exports.help = {
  name: 'minte',
  description: 'rexuss',
  usage: 'minte'
};

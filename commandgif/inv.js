const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setTitle(`**invite Ragif**`)
.setDescription(`[Click here](https://discord.com/api/oauth2/authorize?client_id=814607957349629962&permissions=8&scope=bot)`)
.setImage(`https://media.discordapp.net/attachments/790836700561670145/845115639412555796/image0.gif`)
.setFooter(`RaGif Bot`)    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["inv", "invite"],
permLevel: 0
};

exports.help = {
  name: 'inv',
  description: 'rexuss',
  usage: 'inv'
};

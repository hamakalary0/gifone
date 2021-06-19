const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setAuthor(`RaGif Stats`, ``)
.setDescription(``)
.addField('__Servers__', `\`${client.guilds.cache.size}\``, true)
.addField('__Channels__', `\`${client.channels.cache.size}\``, true)
.addField('__Users__', `\`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\``, true)
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["sbot", "statsbot", "serverbot"],
permLevel: 0
};

exports.help = {
  name: 'sbot',
  description: 'rexuss',
  usage: 'sbot'
};

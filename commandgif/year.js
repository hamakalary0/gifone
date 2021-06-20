const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
   
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let now = new Date();
    let next = new Date(now);
    next.setFullYear(now.getFullYear() + 1);
    next.setHours(0, 0, 0, 0);
    next.setMonth(0, 1);
    let duration = next - now;
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / 1000 / 60) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Next Year!", msg.author.displayAvatarURL())
    .setColor("RANDOM")
    .setDescription(`There are **${days} days**, **${hours} hours**, **${minutes} minutes** and **${seconds} seconds** until **${next.getFullYear()}**!`)
    .setImage("")
    .setFooter(`Or, in short, ${moment.duration(next - now).humanize()}.`)
    message.channel.send(embed);
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["year", "years"],
  permLevel: 0
};

exports.help = {
  name: 'years',
  description: 'rexuss',
  usage: 'year'
};

//txnoembed
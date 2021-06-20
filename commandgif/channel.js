const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor(`RANDOM`)
.setFooter(`RaGif Bot`)    

.addField("**ID**", `\`${role.id}\``, true)
      .addField("**Name**", role.name, true)
      .addField("**Hex**", role.hexColor)
      .addField("**Members**", role.members.size)
      .addField("**Position**", role.position)
      .addField("**Mentionable**", status[role.mentionable])
      .addField("**Time Create**", role.createdAt.toLocaleString(), true)


message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["per", "perms"],
permLevel: 0
};

exports.help = {
  name: 'perms',
  description: 'rexuss',
  usage: 'perms'
};

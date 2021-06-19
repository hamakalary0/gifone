const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
   let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;

        const embed = new MessageEmbed()
            .setTitle("Uptime")
            .setColor("RANDOM")
            .setDescription(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(bot.user.username, bot.user.displayAvatarURL())  
        message.channel.send(embed);
    }




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Uptime", "up"],
  permLevel: 0
}

exports.help = {
  name: 'uptime',
  description: 'rexuss',
  usage: 'uptime'
}; 

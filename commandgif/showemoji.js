
    //Start
   const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {


 

    const emoji = args[0];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

   
  }



exports.conf = {
  enabled: False,
  guildOnly: false,
  aliases: ["se", "showemoji"],
  permLevel: 0
};

exports.help = {
  name: 'se',
  description: 'rexuss',
  usage: 'se'
};

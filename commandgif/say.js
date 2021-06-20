
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {

//start



    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say")) {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) if (!args) return;
    message.channel.send(`** ${args}**`);
  }
});



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say", "1"],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'rexuss',
  usage: 'say'
};

//txnoembed

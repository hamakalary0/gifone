
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {

//start



     message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.channel.send("Write Some Things");
    args.join(" "),
      (err, data) => {
       
      };
  }
});

let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    

message.channel.send("```" + data + "```");


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

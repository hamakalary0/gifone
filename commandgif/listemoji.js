const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach(emoji => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**All Emoji [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
    message.channel.send({embed});
  }




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["text", "0"],
  permLevel: 0
};

exports.help = {
  name: 'text',
  description: 'rexuss',
  usage: 'text'
};

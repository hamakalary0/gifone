const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

exports.run = async (app, message, client, args) => {
 


    //Start
   
   
   message.delete();
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send(`Please Give Me Text!`);

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setDescription("```" + Result + "```")
      .setTimestamp();

    if (Content.length > 20)
      return message.channel.send(`Please Make Shorter! | Limit : 20`);

    message.channel.send(embed);

    message.delete();

    //End
  }






exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Ascii"],
  permLevel: 0
};

exports.help = {
  name: 'ascii',
  description: 'rexuss',
  usage: 'ascii'
};

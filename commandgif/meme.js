const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   message.delete();
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(res => res.json())
      .then(json => {
        let embed = new MessageEmbed()
          .setColor(`RANDOM`)
          .setTitle(`${json.title}`)
          .setURL(json.postLink)
          .setImage(json.url)
          .setFooter(`From /r/${json.subreddit}`);

        message.channel.send(embed);
      });

    //End
  };
   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mem", "memes"],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'rexuss',
  usage: 'meme'
};

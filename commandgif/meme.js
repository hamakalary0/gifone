const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
exports.run = async (app, message, client, args) => {
 


    //Start
   
  
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
  }


   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'meme',
  description: 'rexuss',
  usage: 'meme'
};

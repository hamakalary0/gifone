const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start



    let slot1 = ["🖤", "🤍", "❤️", "🖤", "💜", "💚", "💛", "🧡"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "You Won!⭐️";
    } else {
      we = "You Lose!❌";
    }
   



let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    

message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);

 }  


   
   exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["heart", "Heart", "🤍"],
  permLevel: 0
};

exports.help = {
  name: 'Heart',
  description: 'rexuss',
  usage: 'heart'
};

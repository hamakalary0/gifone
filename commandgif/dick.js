
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
    let sizes = [
      "8D",
      "8=D",
      "8==D",
      "8===D",
      "8====D",
      "8=====D",
      "8======D",
      "8=======D",
      "8========D",
      "8=========D",
      "8==========D",
      "8===========D",
      "8============D",
      "8=============D",
      "8==============D",
      "8===============D",
      "8================D",
      "8=============D • • "
    ];


    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
       .setTitle(`\n${Result}`)
  //   .setDescription(`\n${Result}`)
       .setFooter(`dick size `)
//    .setTimestamp(); thanks
      message.react("🍆")

    message.channel.send(embed);


    //End
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dick"],
  permLevel: 0
};

exports.help = {
  name: 'dicksize',
  description: 'rexuss',
  usage: 'dick'
}; 

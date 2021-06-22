const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
   

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`Hack Status: completed ✅`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`RaGif Hacker! ${Member.user.username}`)
    //  .setTimestamp();

    await message.channel.send(` __**1minte Started ✅**__ `);

    await message.channel.send(`1`);

    await message.channel.send(`2`);

    await message.channel.send(`3`);

    await message.channel.send(`4`);

    await message.channel.send(`5`);

    await message.channel.send(`6`);

    await message.channel.send(`7`);

    await message.channel.send(`8`);

    await message.channel.send(`9`);

    await message.channel.send(`10`);

    await message.channel.send(`11`);

    await message.channel.send(`12`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }





   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["1mint", "1minte"],
  permLevel: 0
};

exports.help = {
  name: 'minte',
  description: 'rexuss',
  usage: 'minte'
};

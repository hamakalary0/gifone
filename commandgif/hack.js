const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
   

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send(
        `Please Mention Some One!`
      );

    if (Member.user.id === message.author.id)
      return message.channel.send(`You Can't Hack Your Self Lmao!`);

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

    await message.channel.send(` **~~Hacking Started!~~** __Hacking ${Member.user.username}__ `);

    await message.channel.send(`Hack Status: 10%`);

    await message.channel.send(`Hack Status: ❗️ERROR❗️`);

    await message.channel.send(`Hack Status: ❗️ERROR❗️`);

    await message.channel.send(`Hack Status: 20%`);

    await message.channel.send(`Hack Status: 30%`);

    await message.channel.send(`Hack Status: 40%`);

    await message.channel.send(`Hack Status: 50%`);

    await message.channel.send(`Hack Status: 60%`);

    await message.channel.send(`Hack Status: 70%`);

    await message.channel.send(`Hack Status: 80%`);

    await message.channel.send(`Hack Status: ‼️ERROR404‼️`);

    await message.channel.send(`Hack Status: 90%`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }





   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Hack", "HACK"],
  permLevel: 0
};

exports.help = {
  name: 'hack',
  description: 'rexuss',
  usage: 'hack'
};

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
      .setTitle(`1Minte Finished ✅`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`RaGif`)
   

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

    await message.channel.send(`13`);

await message.channel.send(`14`);

await message.channel.send(`15`);

await message.channel.send(`16`);

await message.channel.send(`17`);

await message.channel.send(`18`);

await message.channel.send(`19`);

await message.channel.send(`20`);

await message.channel.send(`21`);

await message.channel.send(`22`);

await message.channel.send(`23`);

await message.channel.send(`24`);

await message.channel.send(`25`);

await message.channel.send(`26`);

await message.channel.send(`27`);

await message.channel.send(`28`);

await message.channel.send(`29`);

await message.channel.send(`30`);

await message.channel.send(`31`);

await message.channel.send(`32`);

await message.channel.send(`33`);

await message.channel.send(`34`);

await message.channel.send(`35`);

await message.channel.send(`36`);

await message.channel.send(`37`);

await message.channel.send(`38`);

await message.channel.send(`39`);

await message.channel.send(`40`);

await message.channel.send(`41`);

await message.channel.send(`42`);

await message.channel.send(`43`);

await message.channel.send(`44`);

await message.channel.send(`45`);

await message.channel.send(`46`);

await message.channel.send(`47`);

await message.channel.send(`48`);

await message.channel.send(`49`);

await message.channel.send(`50`);

await message.channel.send(`51`);

await message.channel.send(`52`);

await message.channel.send(`53`);

await message.channel.send(`54`);

await message.channel.send(`55`);

await message.channel.send(`56`);

await message.channel.send(`57❗️`);

await message.channel.send(`58❗️`);

await message.channel.send(`59❗️`);














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

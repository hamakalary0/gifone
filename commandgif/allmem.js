const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   const embed = new Discord.MessageEmbed().setColor(`RANDOM`)
      .setDescription(`** Member
- online   ${
   message.guild.members.cache.filter(m => m.presence.status == "online").size
 }

- do not distrub       ${
      message.guild.members.cache.filter(m => m.presence.status == "dnd").size
    }

- idle       ${
   message.guild.members.cache.filter(m => m.presence.status == "idle").size
 }   
             
- offline   ${
   message.guild.members.cache.filter(m => m.presence.status == "offline").size
 } 
   all Members  ${message.guild.memberCount}**`);
    message.channel.send({ embed });
  }
});
   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["allm", "Allmem"],
  permLevel: 0
};

exports.help = {
  name: 'allmemberes',
  description: 'rexuss',
  usage: 'allmem'
};

const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {


   

    const embed = new MessageEmbed()
      .setTitle(member.user.username + " Information!")
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Full Name", member.user.tag, true)
      .addField("ID", `${member.id}`, true)
      .addField("Status", statuses[member.presence.status], true)
      .addField(
        `Roles Count`,
        message.guild.members.cache.get(member.user.id).roles.cache.size ||
          "No Roles!",
        true
      )
      .addField(`Avatar Url`, `[Link](${member.user.displayAvatarURL()})`, true)
      .addField("Joined Server At", member.joinedAt.toDateString())
      .addField("Joined Discord At", member.user.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["user"],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'rexuss',
  usage: 'user'
};

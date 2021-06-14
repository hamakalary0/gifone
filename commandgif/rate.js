const Discord = require('discord.js');
exports.run = async (app, message, client, args) => {
 


    //Start
  message.delete();
    let Content = args.join(" ");

    if (!Content)
      return message.channel.send(`Please Give Me Something To Rate!`);

    let embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`I Rate`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 To ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
    }
  }





exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rate"],
  permLevel: 0
};

exports.help = {
  name: 'rate',
  description: 'rexuss',
  usage: 'rate'
};

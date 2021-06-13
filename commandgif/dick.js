
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
      "HahdhwhdhD",
      "Abrlerleereeee",
      "ArbeleeeeeeD",
      "Arbeleeeeee",
      "Haaamaup",
      "8haaama",
      "Kurd9999D",
      "9274€haaaama",
      "8=============D",
      "8arbele HupppD",
      "8===============D",
      "8haaaaama=D",
      "Haaaaaaam00001"
    ];

message.react("🤍")

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
  //    .setTitle(`Pp v2 Machine`)
      .setDescription(`${Member.user.username} pp Size Is\n${Result}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();
      message.react("🤍")

    message.channel.send(embed);

    //End
  };



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dicksize',
  description: 'rexuss',
  usage: 'dick'
}; 

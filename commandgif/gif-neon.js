const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/764927608013193276/764933832142749736/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/768164227377791066/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/788707324503392286/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/812066790564823100/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/779428418605023252/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/780111245634043944/image0.gif", "https://cdn.discordapp.com/attachments/764927608013193276/793756092261072936/image0.gif", "https://media.discordapp.net/attachments/824094877809246221/835943686465519626/image0.gif", "https://media.discordapp.net/attachments/824094877809246221/835943639561666660/image0.gif", "https://media.discordapp.net/attachments/824094877809246221/835943624491270204/image0.gif", "https://media.discordapp.net/attachments/824094877809246221/831806153557671936/image0.gif", "https://media.discordapp.net/attachments/824094877809246221/831803810090713088/image0.gif"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("Neon Gif")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['gif-neon','neon-gif','gifneon','neongif'],

  permLevel: 0

};

exports.help = {

  name: 'neon',

  description: 'rexuss',

  usage: 'neon'

};

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711481969868811/850660209926864916/2219fddc755976170bc08428eeb06a99.jpg", "https://media.discordapp.net/attachments/608711481969868811/850660185415614504/198cc72b097e0298c56b3f49df62a8b3.jpg", "https://media.discordapp.net/attachments/608711481969868811/850660146995920926/18be389d0ada949f03c85fbc84aa9ded.jpg", "https://media.discordapp.net/attachments/608711481969868811/850660133273075712/f8196ff7fcdafe1cda76780aae18830d.jpg", "https://media.discordapp.net/attachments/608711481969868811/850660081821548544/8c9ba56641ac41806c267b422e2b4e8d.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659773774037042/272d7b83a9f6b2e63daffe8abb13344c.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659757919567872/22674c9d490599c6bd7d0090775f2f78.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659738740195338/7401d76b2fa733654f2d0460581ffaa7.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659662889091082/1b03a22eed8e377ce5d505fe464f7305.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659388691578890/20161df841652f5548e9e08aff00957d.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659378053775381/dad07f432cc656053fefbaebbb1fc93b.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659303664779274/e6baf4b19adfedc6246e8a6e9422554b.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659287838752818/dcb4931087893aaf72f362c6a6c7d9c3.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659275768725534/0a0872545ea89478a971d20382c2d75c.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659264539263017/9fa1f7d4cd40b13b72cc563f4c83f180.jpg", "https://media.discordapp.net/attachments/608711481969868811/850659218523684894/91428ecf769d91802d517ca7dc05c827.jpg", "https://media.discordapp.net/attachments/608711481969868811/850629563020083241/86e3e577d86b33860a6f3e0b0793df57.webp", "https://media.discordapp.net/attachments/608711481969868811/850555497845227570/807f26d9b8d0a35fb36b4da905168256.jpg", "https://media.discordapp.net/attachments/608711481969868811/850555470594048030/5d3ee2bdf1f69a6b55c7899c8a73d665.jpg", "https://media.discordapp.net/attachments/608711481969868811/850555421180559360/d76bfad0e289741e80a220d066d2f40d.jpg", "https://media.discordapp.net/attachments/608711481969868811/850555405012828210/ca9c3345115858e6ee7bd7b661e02cf5.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554953793011722/0ed6dae722648afb8e0bb8e71f2acda2.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554797936738364/35c03bd7e4dc7c67671380fc39cfc3b2.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554612590051348/badf3e470bcb7a18cffd9a0370f39623.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554587638923375/8122b8ff800001c35ca834a7b34fb0fe.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554552243191838/05be229da09890e3e2bc508b60584291.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554514237947914/367e64a5b0855ec6585fc04ceb4ab3ad.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554474447896576/7519018a7f7d7b6d65e6cb64e0294c6d.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554111480692746/4b9c2357242db1da082c66f3d22a0344.jpg", "https://media.discordapp.net/attachments/608711481969868811/850554071881351199/5833fa595215894e0a862a7424d6ba85.jpg", "https://media.discordapp.net/attachments/608711481969868811/850553874610651146/2252bc381521e36ac0953ef8aad2c33a.jpg", "https://media.discordapp.net/attachments/608711481969868811/850553500026011678/239c246fe320075e1e900e92077cd873.jpg", "https://media.discordapp.net/attachments/608711481969868811/850553320150138890/9e23171f1bcea7f6b83ad5bbc5407dd8.jpg", "https://media.discordapp.net/attachments/608711481969868811/850553276109946910/d0fd417ae3063bd5ce594bb2e88d12c7.jpg", "https://media.discordapp.net/attachments/608711481969868811/850552580630904833/456244b9906197c2aac151e4ca554e60.jpg", "https://media.discordapp.net/attachments/608711481969868811/850552485188861952/d88c9806bc5b3761e486a5649b99846b.jpg", "https://media.discordapp.net/attachments/608711481969868811/850552412476932106/55159d4c469916a50cf9123b384fe075.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("couple Photos")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['pcuople','Pcuople','pcouple','photo-couple'],

  permLevel: 0

};

exports.help = {

  name: 'pcouple',

  description: 'rexuss',

  usage: 'pcouple'

};

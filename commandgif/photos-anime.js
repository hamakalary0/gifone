const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://media.discordapp.net/attachments/608711487325995008/850620751953920021/images.jpeg", "https://media.discordapp.net/attachments/608711487325995008/850620724855308298/----30.jpeg", "https://media.discordapp.net/attachments/608711487325995008/850620718134591488/1-808-700x592.jpg", "https://media.discordapp.net/attachments/608711487325995008/850569853294084106/unnamed.jpg", "https://media.discordapp.net/attachments/608711487325995008/850569773187858452/afd7c9432ccf64e174de933c543f38ab.png", "https://media.discordapp.net/attachments/608711487325995008/850569745987272724/Screenshot_11.jpg", "https://media.discordapp.net/attachments/608711487325995008/850569656547803166/a604a6828503a67ce6516619bdea76a3.png", "https://media.discordapp.net/attachments/608711487325995008/850569616652632095/e73ad1bcb11f846fbcfd964fa4f29598e23c1fc8r1-746-1080v2_uhq.jpg", "https://media.discordapp.net/attachments/608711487325995008/850569506304294942/9634b16abd0f527cf41e24253e93e850.png", "https://media.discordapp.net/attachments/608711487325995008/850569442299215903/QHIBkfTO-SQ.jpg", "https://media.discordapp.net/attachments/608711487325995008/850569441028866109/maxresdefault.jpg", "https://media.discordapp.net/attachments/608711487325995008/850569312326647858/2c04c264f99b614c1b979962d90f1acc.png", "https://media.discordapp.net/attachments/608711487325995008/850494810980614174/--22.jpg", "https://media.discordapp.net/attachments/608711487325995008/850435543975460904/50b6848d418423365223d53c0dea825e.jpg", "https://media.discordapp.net/attachments/608711487325995008/850435543031611392/d7ea78aa6b8e00524873fe329ef1d34a.jpg", "https://media.discordapp.net/attachments/608711487325995008/850435457564147802/150102ebdc256120794dd3525f60116b.jpg", "https://media.discordapp.net/attachments/608711487325995008/850435457136459846/e2d97d78b6aceb76595fe930b49f3cac.jpg", "https://media.discordapp.net/attachments/608711487325995008/850435312177250325/2b6486a714974de69a57de60db8a3481.jpg", "https://media.discordapp.net/attachments/608711487325995008/850371836784279582/5c1f3c42-52f1-4992-91d0-e8fe21150a25.jpg", "https://media.discordapp.net/attachments/608711487325995008/850371790815363092/-_ICONS___tsuktea_24.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle("anime Photo")
.setColor("RANDOM")
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['Panime','photo-anime','panime','animep'],

  permLevel: 0

};

exports.help = {

  name: 'panime',

  description: 'rexuss',

  usage: 'panime'

};

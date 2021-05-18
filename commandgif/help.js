const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
// .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(`https://media.discordapp.net/attachments/790836700561670145/838461806137442365/image0.gif`)
.setAuthor(`Gif Help`)
.setDescription(`
**Info Commands** (*)
\`avatar\` - \`about\` - \`ping\`
\`inv\` - \`clear\` - \`say\`

**Gifs Commands**
\`boy\` - \`girl\` - \`baby\`
\`neon\` - \`sad\` - \`smoking\`
\`animal\` - \`anime\` - \`couple\`
\`emoji\`

**Text Commands**
\`${PREFIX}tEng\` - \`tArab\` - \`tKurd\` 

**Links**
**[Invite](https://discord.com/api/oauth2/authorize?client_id=814607957349629962&permissions=8&scope=bot) - [Server Support](https://discord.gg/jy6zvqV2V6)** **-** [Vote](https://top.gg/bot/814607957349629962)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'rexuss',
  usage: 'h'
};

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var config = require('../config.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#ef0000') 
.setThumbnail(message.author.avatarURL({dynamic: "true"}))
// .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage(`https://media.discordapp.net/attachments/790836700561670145/838461806137442365/image0.gif`)
.setAuthor(`Gif Help`)
.setDescription(`
**Info Commands** (*)
\`server\` - \`avatar\` - \`about\` 
\`ping\` - \`inv\` - \`say\` - \`vote\`

**Moderation Commands**
\`ban\` - \`unban\` - \`kick\` - \`clear\`
\`mute\` - \`unmute\` - \`warn\`
\`removeRole\` - \`addRole\`
\`afk\` - \`sug\` - \`report\`

**Gifs Commands**
\`boy\` - \`girl\` - \`baby\`
\`neon\` - \`sad\` - \`smoking\`
\`animal\` - \`anime\` - \`couple\`
\`emoji\` - \`bille\` - \`Aesthetic\`

**Text Commands**
\`eng\` - \`arab\` - \`kurd\`
\`persian\` - \`turk\` - \`rabbit\`

**Music Commands**
\`play\` -  \`skip\` - \`np\` 
\`pasue\` - \`resume\` - \`stop\`
\`queue\`

**Econome Commands**
\`daily\` - \`balance\` - \`send\`
\`top\` - \`s(1-99999)\` 


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

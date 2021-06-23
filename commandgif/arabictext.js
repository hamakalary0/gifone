
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {

    
    
    let replies = ["هيه حظوظ والطيب يرد خسران من ذيچ الاحلام الچان بانيها:herb:","إذا زارتک شدّه فاعلم أنّها سحابه صیف عن قلیل تقشع، ولا یخیفک رعدها، ولا یرهبک برقها، فربّما کانت محمّلهً بالغیث","چنت اعاتب بالوكت عرفني بيك :broken_heart: :exclamation:","أخاف أفگد طعم باچر يالمتانيك:wilted_rose:","اسألني واني اختصر لعيونك المده :wilted_rose:","وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهيت :wilted_rose:","ما خربتني وياك غير اليكولون:wilted_rose:","شگلّك يالعلي تسأل.. انا التيهت كلشي وكلشي ما اندل:wilted_rose:","هي مسؤولية من تحبلك انسان :broken_heart: "];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ta", "textarabic"],
  permLevel: 0
};

exports.help = {
  name: 'textarabaic',
  description: 'rexuss',
  usage: 'tarabix'
};

//txnoembed

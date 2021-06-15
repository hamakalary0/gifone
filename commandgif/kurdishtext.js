

const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
    let sizes = [
      "سەرەتاکـــــان هەر جوانـــن
کەست بــــینیوە بێت و 
یەکســـــــەر بـڵـــێ من بــــــــێ ئــەخڵاقــــم!؟",
      "من لەســــەر  پەیـــمانــــم  🙂                                                  تــۆ لەســــەر  کۆشـــــی ئــەو…..!!✨",
      "ڪە دڵت شڪا، 
۳٦۰پلە ئەگۆڕێـت
 بۆ مرۆڤێڪی ڪە…!🙂💔",
      "ئەتــــکەم  بە هیـــچــەم…!🙂🤍
بمـــکەی بە دوەم ؛)👍🏽!",
      "زۆر ئیــهمالـــی مەکە..!😀
سوورشتی مرۆڤ  وایــە  لەگـەڵ شتــەکان ڕا دێت..",
     "ئێمەش ڕۆژێــــك جوان بوویـــن",
     
    ];


    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(`RANDOM`)
       .setTitle(`\n${Result}`)
  //   .setDescription(`\n${Result}`)
       .setFooter(`Kurd Text`)
//    .setTimestamp(); thanks
      message.react("✨")

    message.channel.send(embed);


    //End
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kurdtext", "KurdText", "kt"],
  permLevel: 0
};

exports.help = {
  name: 'kurdishtext',
  description: 'rexuss',
  usage: 'kurd'
}; 

const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
    let sizes = [
      "سەرەتــــاکان هەر جوانــــنج کەســــت بینیـــوە ،،یەکــــسەر بڵـــێ من بێ ئەخـــلاقم...! حەەەەمە",
      "من لەســـەر پەیـــمانم 🙂 تــۆ لەسەر کشـــی ئەو 😄💔! حەمە",
      "نــامەوێ  بچیـــتە  دەرەوە  مرۆڤــی لێــــە (:",
      "بیـــری  ناوم  دەکەم  بە دەنگـــــی تۆ",
      "زۆر بیری  مەکە :)  چوونکە لەگەل کەسێکی ترە",
      ": )",
      ": (",
      "🐰💔!!ئەتــرسم  ڕۆژێـــك  لەگــەڵ  نەبوونت  ڕابێـــم  ،  تۆش  بتەوێ  بگەڕیتەوە",
      "ڕۆژێـــك  خەمـــەکانمام  بۆ  دووژمنەکانمان دەگێرینەوە چوونکە دۆستە کانمان خیانەتیان کردووە دووژمنەکانمان ڕاستگۆ بوون",
      "کە دڵ شکـا💔!                  داوای لێبووردن ،. گوو خواردنە",
      "ئەتـــکەم بە  هیچــــەم...!🤍 بمکــــەی بە دووەم",
      "لە هەموو شتێك  ڕاســت  بووم..!!✨        تانها لە خۆش ویستنی تۆ نەبێــــت",
      "وەڵا ژیان  تەقلــــەی  پێـــلێــداین...!😂💔",
      "😄!!....بێ تۆ هیچ شتێك تامی نەماوە "
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
       .setFooter(`kurdish Text`)
//    .setTimestamp(); thanks
      message.react("🤍")

    message.channel.send(embed);


    //End
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tkurd", "textkurdish", "tk"],
  permLevel: 0
};

exports.help = {
  name: 'kurdishtext',
  description: 'rexuss',
  usage: 'kurd'
}; 

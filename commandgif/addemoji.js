const Discord = require('discord.js');
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
  
        let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;



        if (!message.member.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send(`:x: | **You Don't Have Permission To Use This Command**`)
}
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send(`:x: | **Provde The emojis to add**`);
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}`
            ).then(em => message.channel.send(em.toString() + " added!")).catch(error => {
              message.channel.send(":x: | an Error occured")
                console.log(error)
})
          
        }
        
   

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["addem"],
  permLevel: 0
};

exports.help = {
  name: 'addemoji',
  description: 'rexuss',
  usage: 'addem'
}; 

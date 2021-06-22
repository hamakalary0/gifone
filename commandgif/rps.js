const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const chooseArr = ["✌", "✊", "✋"];
function promptMessage(message, author, time, vaildReactions) {
    time *= 1000;
    for (const reaction of vaildReactions) message.react(reaction);
    const filter = (reaction, user) =>
      vaildReactions.includes(reaction.emoji.name) && user.id === author.id;
    return message
      .awaitReactions(filter, { max: 1, time: time })
      .then(collected => collected.first() && collected.first().emoji.name);
  }
    

exports.run = async (dev, message, client, args,dev2) => {

  
  const embed = new Discord.MessageEmbed()
            .setColor("29ffed")
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setTitle("**React to play Rock Paper Scissor**")
    //        .setTimestamp();
            
        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);

        embed
            .setTitle(`${result}`)
            .setDescription(`**${reacted} vs ${botChoice}**`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "✊" && clientChosen === "✌") ||
                (me === "✋" && clientChosen === "✊") ||
                (me === "✌" && clientChosen === "✋")) {
                    return "You won!";
            } else if (me === clientChosen) {
                return "my = you";
            } else {
                return "You lost";
            }
        }}
  




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rps", "RPS", "Rps"],
  permLevel: 0
};

exports.help = {
  name: 'rps',
  description: 'rexuss',
  usage: 'rockpapersizer'
};

  

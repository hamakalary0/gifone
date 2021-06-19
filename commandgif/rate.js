const Discord = require('discord.js');
const weather = require("weather-js");
const { MessageEmbed } = require("discord.js");
exports.run = async (app, message, client, args) => {
 


    //Start
   
   message.delete();

    if (!args[0]) return message.channel.send("Please Give Location!");

    weather.find({ search: args.join(" ") }, function(error, result) {
      if (error) return message.channel.send(`Something Went Wrong, Try Again Later!`);

      if (result === undefined || result.length === 0)
        return message.channel.send(
          `Invalid Location, Please Give Valid Location!`
        );

      var current = result[0].current;
      var location = result[0].location;

      const Weather = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`${location.name} Weather!`)
        .setDescription(`${current.skytext}`)
        .setThumbnail(current.imageUrl)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature}°`, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .addField("Wind", current.winddisplay, true)
        .addField("Feels Like", `${current.feelslike}°`, true)
        .addField("Timezone", `UTC${location.timezone}`, true)
        .setTimestamp();

      message.channel.send(Weather);
    });

    //End
  }

   



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rate',
  description: 'rexuss',
  usage: 'rate'
};

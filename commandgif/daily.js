const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
var config = require('../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');


exports.run = async (bot, client, message, args) => {
let user = message.author;

        let timeout = 86400000;
        let amount = 200;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You've collected your daily reward of ${amount} coins`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }



exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["D", "d", "dailyy"],
permLevel: 0
};

exports.help = {
  name: 'daily',
  description: 'rexuss',
  usage: 'daily'
};


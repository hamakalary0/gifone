const discord = require('discord.js');
const fs = require('fs');
const http = require('http');
const express = require('express');
const config = require('./config.json');
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async () => {
   client.appInfo = await client.fetchApplication();
  setInterval( async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
  
 client.user.setActivity(`*help / Tag My` , { type:"PLAYING" })
  console.log("${client.user.tag}")
});

const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commandgif/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./commandgif/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commandgif/${command}`)];
            let cmd = require(`./commandgif/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
           reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./commandgif/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commandgif/${command}`)];
            let cmd = require(`./commandgif/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === config.sahip) permlvl = 4;
    return permlvl;
};


/////  HaaaaaaaMa ////////














client.login(config.token)


//------------------------ HaaaMa Random Gif -----------------------//
//------------------------ HaaaMa Random Gif -----------------------//
//------------------------ HaaaMa Random Gif -----------------------//

client.on("userUpdate", async(Revenge, NYKS) => {
  
if(Revenge.avatarURL === NYKS.avatarURL) return;
let RevengePP = NYKS.avatarURL.split("?")[0]

const Kanal = client.channels.filter(Revenge => Revenge.name === 'random-gif' && Revenge.type === 'text').array().forEach(Nucceteere => {
if (RevengePP.endsWith('gif')) {
Nucceteere.send(new Discord.Attachment(RevengePP))
}
const Kanal2 = client.channels.filter(Revenge => Revenge.name === 'random-pp' && Revenge.type === 'text').array().forEach(Revenge => {
if (!RevengePP.endsWith('gif')) {
Revenge.send(new Discord.Attachment(RevengePP))
}
})
})
})

//------------------------ HaaaMa Random Gif -----------------------//
//------------------------ HaaaMa Random Gif -----------------------//
//------------------------ HaaaMa Random Gif -----------------------//


const channelid = "843947526432096286"    //id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
});

/////  HaaaaMa
/////.        haaaaMa
/////
/////

client.on("message", message => {
  if (message.channel.id === "824062789328306217") {
    message.react("🤍").then(() => {
      message.react("🖤");
      message.react("<a:emoji_5:791253013678784571>");
      
    });
  }
});



////
////
////
////

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "<@814607957349629962>") {
    msg.reply(" ``` my Prefix In This Server (*)``` ");
  }
});


////
////
////
////



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "<@640204311262920764>") {
    msg.reply(" ``` Gyan bra Hama Lera Neya Farmu``` ");
  }
});

////
////
///
////



client.on("message", message => {
  if (message.content === "allchannel") {
    var channels = message.guild.channels.cache
      .map(channels => `${channels.name}, `)
      .join("\n ");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("rooms:", `**[${channels}]**`);
    message.channel.send(embed);
  }
});



client.on("message", message => {
  if (message.content === "all channel") {
    var channels = message.guild.channels.cache
      .map(channels => `${channels.name}, `)
      .join("\n ");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("rooms:", `**[${channels}]**`);
    message.channel.send(embed);
  }
});



client.on("message", message => {
  if (message.content === "Allchannel") {
    var channels = message.guild.channels.cache
      .map(channels => `${channels.name}, `)
      .join("\n ");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("rooms:", `**[${channels}]**`);
    message.channel.send(embed);
  }
});


////
////
////
////
////


client.on("message", message => {
  if (message.content.startsWith( "*" + "perms")) {
    if (!message.channel.guild) return;
    var perms = JSON.stringify(
      message.channel.permissionsFor(message.author).serialize(),
      null,
      4
    );
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(":tools: Permissions")
      .addField("Your Permissions:", perms);
    message.channel.send({ embed: embed });
  }
});


////
////
////
///

client.on("message", function(message) {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith("*" + "say")) {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) if (!args) return;
    message.channel.send(`** ${args}**`);
  }
});


////
////
////
////



client.on("message", async message => {
  if (message.content.startsWith("*" + "uptime")) {
    let rozh = Math.floor(client.uptime / 86400000);
    let katzhmer = Math.floor(client.uptime / 3600000) % 24;
    let daqa = Math.floor(client.uptime / 60000) % 60;
    let chrka = Math.floor(client.uptime / 1000) % 60;

    return message.channel.send(
      `__Uptime:__\n${rozh}d ${katzhmer}h ${daqa}m ${chrka}s`
    );
  }
});



////
////
////
////

client.login("ODM5MjY0ODA2Nzc5MDkzMDAz.YJHIQg.XubgKR_hlLMjHSGKGM_aSLqUm-I");
const prefix = "1";

   

client.on("message", async message => {
  if (message.content.startsWith(prefix + "resporter")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    if (!args[0]) return message.channel.send("**DU KAS TAG BKA!**");
    if (!args[1])
      return message.channel.send("You need to mention someone else!");

    if (args[0] || args[1]) {
      var FirstUser =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      var SecondUser =
        message.mentions.members.first(-1) ||
        message.guild.members.cache.get(args[1]);

      if (!FirstUser)
        return message.channel.send(
          `I couldn't find someone named **${args[0]}**!`
        );
      if (!SecondUser)
        return message.channel.send(
          `I couldn't find someone named **${args[1]}**!`
        );

      if (FirstUser || SecondUser) {
        const FirstUserSliced = FirstUser.user.username.slice(
          0,
          FirstUser.user.username.length / 2
        );
        const SecondUserSliced = SecondUser.map(user => {
          return user.user.username.slice(user.user.username.length / 2);
        });
        const SecondUserName = SecondUser.map(user => {
          return user.user.username;
        });

        message.channel.send(
          `${FirstUser.user.username} + ${SecondUserName} = **${FirstUserSliced}${SecondUserSliced}**`
        );
      }
    }
  }
});











client.login(config.token)


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








client.login("ODE0NjA3OTU3MzQ5NjI5OTYy.YDgUxw.iDlmOwH59X52sFCVGe7ankmBHSU");
const prefix = "*";



















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
  if (message.content === prefix + "allchannel") {
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
  if (message.content === prefix + "all channel") {
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
  if (message.content === prefix + "Allchannel") {
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
  if (message.content.startsWith(prefix + "perms")) {
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
  if (message.content.startsWith(prefix + "say")) {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) if (!args) return;
    message.channel.send(`** ${args}**`);
  }
});


////
////
////
////



client.on("message", async message => {
  if (message.content.startsWith(prefix + "uptime")) {
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


   

client.on("message", async message => {
  if (message.content.startsWith(prefix + "resporter")) {
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");

    if (!args[0]) return message.channel.send("**Mention 2 User!**");
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



/////
/////
/////
/////



client.on("message", message => {
  if (message.content.startsWith(prefix + "stats")) {
    message.channel.send({
      embed: new Discord.MessageEmbed()
        .addField("Uptime", timeCon(process.uptime()), true)
        .addField(
          "RAM Usage",
          `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
          true
        )
        .addField("Guild Count", client.guilds.cache.size, true)
    });
  }
});

function timeCon(time) {
  let days = Math.floor((time % 31536000) / 86400);
  let hours = Math.floor(((time % 31536000) % 86400) / 3600);
  let minutes = Math.floor((((time % 31536000) % 86400) % 3600) / 60);
  let seconds = Math.round((((time % 31536000) % 86400) % 3600) % 60);
  days = days > 9 ? days : "0" + days;
  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;
  seconds = seconds > 9 ? seconds : "0" + seconds;
  return `${days > 0 ? `${days}:` : ""}${
    (hours || days) > 0 ? `${hours}:` : ""
  }${minutes}:${seconds}`;
}




///
///
///
///




///
///
///
///

client.on('message', message => {
         if (message.content === prefix + "date") {
         if (!message.channel.guild) return   
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.MessageEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "TIME AND DATE")
                .setColor('RANDOM')
                .setFooter("BLACK BOT")
                .setFooter(message.author.username, message.author.avatarURL())
                 .addField('Time',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
              
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.send(Date15);
        }
    });

////
////
////
////
////

client.on("message", message => {
  if (message.content.startsWith(prefix + "youtube")) {
    const query = message.content.split(" ").slice(1);
    const url = `https://www.youtube.com/results?search_query=${query}`;
    if (!query)
      return message.channel.send(
        `**:x: | Error , Please Type Command True Ex : \`${prefix}youtube [Anything]\`**`
      );
    let querry = new Discord.MessageEmbed()
      .setAuthor(
        "Youtube",
        "https://cdn.discordapp.com/attachments/599152027628732429/599229170517540874/1GNwojhBBCCCGEEEIIIYQQQgghhBBCCCGEEELI7APi4BZVCOUmf4AAAAASUVORK5CYII.png"
      )
      .setColor("RED")
      .setTitle(`Results : \`${query.join(" ")}\``)
      .setDescription(`${url}`)
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send(querry);
  }
});

///
////
/////
////


client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command === "kill") {
    var sabotage = message.mentions.users.first();
    if (sabotage == message.author)
      return message.reply(`**No please menition user**`);
    if (sabotage === client.user) return message.reply(`**Why?**`);
    if (sabotage < 1) {
      message.delete();
      return message.channel.sendMessage(
        "Put something to kill like mention your username or use an emoji"
      );
    }
    if (!sabotage)
      return message.channel.send(`Please Mention A Member to Kill :warning:`);
    message.channel.send("▄︻̷̿┻̿═━一 ${sabotage").then(msg => {
      msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
      }, 1000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
      }, 2000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
      }, 3000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
      }, 4000);
      setTimeout(function() {
        msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
      }, 5000);
      msg.delete(6000);
      message.delete();
    });
    message.channel
      .send("** The crime has been successfully hidden 🕳 **")
      .then(msg => msg.delete(7000));
  }
});





///////////





client.on('message', message => {
    if (message.content.startsWith(prefix  + 'sug')) {
        if (message.member.hasPermission("MANAGE_GUILD")) return message.reply("Sorry You Not Have Premission MANAGE GUILD")
   var say = message.content.split(" ").slice(1).join(" ");
    if(!say) return message.reply("**Please Type Message For say**")
        message.channel.send(say);
}
    if (message.content.startsWith(prefix  + "embed")) {
        if (message.member.hasPermission("MANAGE_GUILD")) return message.reply("Sorry You Not Have Premission MANAGE GUILD")
   var args = message.content.split(" ").slice(1).join(" ");
   if(!args) return message.reply("**Please Type Message For say Embed**")
   const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL())
        .setAuthor(message.author.username,message.author.avatarURL())
        .setDescription(args)
        message.channel.send(embed);
}
});








client.login(config.token)


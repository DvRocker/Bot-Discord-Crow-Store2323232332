const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return; // Toxic Code
channel.send({embed : embed});
}); // n3k4a



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","- CS 195 -"));
    });


client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ ✅ **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__✅**")
                });
      }
         
});


client.on('message', message => {    ///Toxic Codes
            if (message.content.startsWith("!rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')    ///Toxic Codes
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);   ///Toxic Codes
    }  
});    




client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});





client.on('guildMemberAdd', member=> {
    member.setNickname(`Crown || ${member.user.username}`)
});



client.on('message', message => {
    var prefix = "!";
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if(!reason) return message.channel.send(`https://cdn.pg.sa/fjxlms81nk.png`);
  if (!message.guild.member(user)
  .bannable) return message.reply(`This User Is Have High Role !`);
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
})


client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log-warn');
    if(message.content.startsWith(`${prefix}warn`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('0', "**نشر في الخاص**");
        reason = reason.replace('1', "**اسم غير لائق**");
        reason = reason.replace('2', "**صوره غير لائقه**");
        reason = reason.replace('3', "**سب الاهل**");
        reason = reason.replace('4', "**سب الذات الاهيه**");
        reason = reason.replace('5', "**مخالفه القوانين مع اخذ اكثر من تحذير**");
        reason = reason.replace('6', "**سبام في الشات**");
        reason = reason.replace('7', "**استخدام بعض الاوامر بشكل مسبب للإضرار بالسيرفر**");
        reason = reason.replace('8', "**جلب اعضاء مفبركين للسيرفر**");
        reason = reason.replace('9', "**عنصريه**");
        var embed = new Discord.RichEmbed()
        .setAuthor(`User Warned!`)
        .addField(`Name ♣`, `<@${p.id}>`)
        .addField(`By ♣`, `<@${message.author.id}>`)
        .addField(`Reason ♣`, reason)
        .setTimestamp()
        .setColor("WHITE")
        .setFooter(` `)
        message.channel.send(`${p} ${reason}`)
            message.delete();
        log.send({embed});
    }
})

client.on('message', message => {
    var prefix = "!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});//Toxic Codes

client.on('message', message => {
    if (message.content === "!createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Owner", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Co-Leader", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "King", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Qween", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "HighNiss", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Pros", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP+", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "VIP", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Actve", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Members", color: "#ffffff", permissions: [] })
        

message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعه الرتب **')
}
});


client.login(process.env.BOT_TOKEN);



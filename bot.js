const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"


client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Crown Store', 'https://images-ext-1.discordapp.net/external/7zEICvLUS2mPYG2RVAsa7S5IHDYpPz2mu_TM2Xbv5-4/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/528532541397794818/5746667b86e4874494bdef1818f417a4.png?width=513&height=513')

var channel =member.guild.channels.find('name', 'chat')
if (!channel) return;
channel.send({embed : embed});
});

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`خرج عضو`)
    .setDescription(`الى اللقاء...`)
    .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('RED')
    .setFooter(`Crown Store`, '')

var channel =member.guild.channels.find('name', 'chat')
if (!channel) return;
channel.send({embed : embed});
});




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
});    ///Toxic Codes




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

client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
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
});//toxic codes



client.on('message', message => {
  var prefix = "!";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers ❌**');
   const guild = message.guild;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
  message.channel.send(`**:white_check_mark: ${user.tag} Kicked Form The Server By : <@${message.author.id}> ! :airplane:** `)
  guild.owner.send(`سيرفر : ${guild.name}
**تم طرد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}



client.on('guildMemberAdd', member=> {
    member.setNickname(`Crown || ${member.user.username}`)
});





client.login(process.env.BOT_TOKEN);



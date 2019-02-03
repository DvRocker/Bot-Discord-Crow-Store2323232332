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


clinet.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "- CS 195 -");
   member.addRole (role);
  
})

clinet.on ("guildMemberRemove", member => {
   
})





client.on('guildMemberAdd', member=> {
    member.setNickname(`Crown || ${member.user.username}`)
});



client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
  let prefix = '!'; //البرفكس
  let msgarray = message.content.split(" ");
  let cmd = msgarray[0];
  let args = msgarray.slice(1);
  if(cmd === `${prefix}warn`){//الامر
    
    
  
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find users.");
      let reason = args.join(" ").slice(22);
  
      let reportembed = new Discord.RichEmbed()
      .setDescription("Warn")
      .setColor("RANDOM")
      .addField("Warn User", `${rUser} with ID: ${rUser.id}`)
      .addField("Warn By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason",`${reason}`)
      
      
      let reportchannel = message.guild.channels.find(`name`,"log-warn"); //حط هنا اسم روح اللوج
      if(!reportchannel) return message.channel.send("Couldn't find `log-warn` channel. "); //حط هنا اسم روم اللوج
      
      message.delete().catch(O_o=>{});
      reportchannel.send(reportembed);
      let role = message.guild.roles.find(`name`, 'Warn'); //حط هنا اسم الرتبة
      if(!role) return message.guild.channel.send("Could't find 'Warn' role."); //حط هنا اسم الرتبة
      rUser.addRole(role);
      
          return;
      }
      });




client.login(process.env.BOT_TOKEN);



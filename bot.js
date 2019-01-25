const Discord = require('discord.js');
const client = new Discord.Client();



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('Crown Store', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

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

client.on("ready", () => {
  function lol() {
    client.guilds.get('ايدي سيرفرك').roles.find("name", "اسم الرتبة RainBow").setColor("RANDOM");
  };
  setInterval(lol, 1600);
}); //Epic Codes

client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","- CS 195 -"));
    });



*/
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '538307726762049536').setName("W");
client.channels.find('id', '538307726762049536').setName("We");
client.channels.find('id', '538307726762049536').setName("Wel");
client.channels.find('id', '538307726762049536').setName("Welc");
client.channels.find('id', '538307726762049536').setName("Welco");
client.channels.find('id', '538307726762049536').setName("Welcom");
client.channels.find('id', '538307726762049536').setName("Welcome");
client.channels.find('id', '538307726762049536').setName("Welcome T");
client.channels.find('id', '538307726762049536').setName("Welcome To");
client.channels.find('id', '538307726762049536').setName("Welcome To C");
client.channels.find('id', '538307726762049536').setName("Welcome To ro");
client.channels.find('id', '538307726762049536').setName("Welcome To n");
client.channels.find('id', '538307726762049536').setName("Welcome To S");
client.channels.find('id', '538307726762049536').setName("Welcome To t");
client.channels.find('id', '538307726762049536').setName("Welcome To To o");
client.channels.find('id', '538307726762049536').setName("Welcome To r");
client.channels.find('id', '538307726762049536').setName("Welcome To e");
client.channels.find('id', '538307726762049536').setName("Welcome To Crown Store");
  }, 4000);
});
/*




client.login(process.env.BOT_TOKEN);



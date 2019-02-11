const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Hemen Gel Hadi Ne Bekliyorsun ?! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('**SEN YOKKEN 1 KİŞİ EKSİĞİZ VE BU SUNUCU BOTUMUZUN __SPONSOR__ SUNUCUSU https://discord.gg/degXdRH**')
  .setFooter("♥ 2018 ♥ TheRenk ♥ BOT ♥ Sponsor ♥")
  .setURL('https://discord.gg/degXdRH')
  message.delete();
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'sponsor2',
  description: 'Afk Modundan Cikmani Saglar',
  usage: 'sponsor2'
};
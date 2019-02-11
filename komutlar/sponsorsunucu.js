const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("En Iyi MineCraft Sunucusu Için Tıkla Bana! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .addField('Play.Mcadventuretime.com Minecraft Sunucusu Tanıtımına Göz Atabilirsiniz Gerçekten Güzel Bir Tanıtım https://www.youtube.com/watch?v=8ZiYyRWZ2s4 \n☆》Discord Sunucu Link\n☆》 https://discord.gg/Ndk6uck')
  .setFooter("♥ 2018 ♥ TheRenk ♥ BOT ♥ Sponsor ♥")
  .setURL('https://discord.gg/Ndk6uck')
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
  name: 'mc-sw',
  description: 'Afk Modundan Cikmani Saglar',
  usage: 'mc-sw'
};
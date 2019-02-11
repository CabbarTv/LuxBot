const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setAuthor("🍑Twerk saati.")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor('RANDOM')
  .setImage("https://cdn.discordapp.com/attachments/417689039622373376/420943697467932685/giphy.gif")
  .setFooter("©️ 2018 | TheRenk BOT", "https://i.hizliresim.com/PlaDk7.png")
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'Botun pingini gösterir.',
  usage: 'çılgınlık'
};
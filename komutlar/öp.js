const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage("https://thumbs.gfycat.com/SorrowfulSpectacularGossamerwingedbutterfly-size_restricted.gif")
  .setFooter("©️ 2018 | TheRenk BOT", "https://i.hizliresim.com/5DNb6d.jpg")
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'Botun pingini gösterir.',
  usage: 'öp'
};
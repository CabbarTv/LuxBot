const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('Atam Siz Yapmayın')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
	.setImage(`https://cdn.discordapp.com/attachments/382912033458225155/385141780456407041/trigger_1.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atrigger',
  description: 'Ağlarsın',
  usage: 'z!ağla'
};

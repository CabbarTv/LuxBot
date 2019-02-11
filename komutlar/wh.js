const Discord = require('discord.js');
var discord = require('discord-bot-webhook');

exports.run = (client, message, args) => {
let [mesaj, bot, url] = args.join(" ").split("@");
  if(!bot) {
    [mesaj, bot, url] = ["Özel Bot", mesaj, "http://i.imgur.com/dSEAm3X.jpg"];
  }
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
	discord.hookId = '439411215178006548';
	discord.hookToken = '5TKXG35WI8RAkuPnW5H2RIocxvpIFZFdz_mTsNfHGluKcTiEiJeIAmiWCH_PTSfCM64n';
	discord.userName = (bot);
	discord.avatarUrl = (url);
	discord.sendMessage(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['webhook', 'wh'],
  permLevel: 4
};

exports.help = {
  name: 'Webhook',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'wb [yazdırmak istediğiniz yazı]'
};
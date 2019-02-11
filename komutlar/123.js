const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = (client, message, args) => {
  let guildyazi = args.slice(0).join(' ');

function makeChannel(message){
    var server = message.guild;
    var name = message.author.username;

	server.createChannel(name, guildyazi);
	message.channel.send(`Kanal oluşturuldu: **${guildyazi}**`);
}
message.channel.send(`**${name}**`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['guild', 'kanal'],
  permLevel: 4
};

exports.help = {
  name: 'guild',
  description: 'Server-a kanal olusturur.',
  usage: 'kanal yazi'
};

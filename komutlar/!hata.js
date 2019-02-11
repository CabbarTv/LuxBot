const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let type = args.slice(0).join(' ');
        if (type.length < 1) return message.reply('<:pencil:427884522068246539> Bug İçin Birşey Girmelisin.');

        client.channels.get("427884522068246539").sendMessage( '**Hata/Bug Bildirim/Z Bot** \n__**Kullanici**__ : @' + message.author.tag + '\n__Hata__:**' + type + '**');

    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bug'],
  permLevel: 0
};

exports.help = {
  name: 'hata',
  description: 'Hata Bildirir.Yapimci Zentor#8088',
  usage: 'tr!hata'
};

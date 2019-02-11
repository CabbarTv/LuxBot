const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let type = args.slice(0).join(' ');
        if (type.length < 1) return message.reply('<:pencil:365528941194248193> '+ exports.help.name +' İçin Birşey Girmelisin.');

        client.channels.get("408971458614788127").sendMessage( '**İstek Bildirimi/**: \n__**Kullanici**__ : @' + message.author.tag + '\n__İsteği__:**' + type + '**');

    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'istek',
  description: 'Hata Bildirir.Yapimci Zentor#8088',
  usage: '/hata'
};

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  client.on('message', msg => {

       msg.channel.send('Loading: [#=========] 10%')
       .then(nmsg => nmsg.edit('Loading: [##========] 20%'))
       .then(nmsg => nmsg.edit('Loading: [###=======] 30%'))
       .then(nmsg => nmsg.edit('Loading: [####======] 40%'))
       .then(nmsg => nmsg.edit('Loading: [#####=====] 50%'))
       .then(nmsg => nmsg.edit('Loading: [######====] 60%'))
       .then(nmsg => nmsg.edit('Loading: [#######===] 70%'))
       .then(nmsg => nmsg.edit('Loading: [########==] 80%'))
       .then(nmsg => nmsg.edit('Loading: [#########=] 90%'))
       .then(nmsg => nmsg.edit('Loading: [##########] 100%'))
       .then(nmsg => nmsg.edit('Tamamlandi!'));

  })};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['screen', 'yukle'],
  permLevel: 4
};

exports.help = {
  name: 'ls',
  description: 'Loading Screen.',
  usage: 'ls'
};

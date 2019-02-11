const Discord = require('discord.js');


exports.run = (client, message, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Komut giriişi').setDescription('Gerekli Dosaylar Kurulsunmu?.').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
          message.guild.createChannel(`▬▬▬▬▬▬♦📜♦▬▬▬▬▬▬`, 'category');
          message.guild.createChannel(`📃●│sohbet`);
        message.guild.createChannel(`👤●│bot-chat`);
            message.guild.createChannel(`📷●│foto-chat`);
          message.guild.createChannel(`▬▬▬▬▬▬♦🔒♦▬▬▬▬▬▬` , 'category' );
        message.guild.createChannel(`🔔●│duyuru`);
          message.guild.createChannel(`😎●│partner`);
            message.guild.createChannel(`⛔●│kurallar`);
              message.guild.createChannel(`😈●│ödüller`);
              message.guild.createChannel(`▬▬▬▬▬๑۩🔒۩๑▬▬▬▬▬`, 'category');
        message.guild.createChannel(`🏆 | Lord.`, 'voice');
          message.guild.createChannel(`🌷 | Ladies`, 'voice');
        message.guild.createChannel(`👑 | Manager.`, 'voice');
        message.guild.createChannel(`🌟 | Vip.`, 'voice');
        message.guild.createChannel(`✨ | Çalıskanlar`, 'voice');
        message.guild.createChannel(`▬▬▬▬▬๑۩💬۩๑▬▬▬▬▬`, 'category');
          message.guild.createChannel(`💬 | Sohbet I`, 'voice');
		  message.guild.createChannel(`💬 | Sohbet II`, 'voice');
		  message.guild.createChannel(`💬 | Sohbet III`, 'voice');
		  message.guild.createChannel(`▬▬▬▬▬๑۩🎄۩๑▬▬▬▬▬`, 'category'); 
		   message.guild.createChannel(`😹 | Şamata`, 'voice');
		    message.guild.createChannel(`🎓  | Ders`, 'voice');
			 message.guild.createChannel(`🎼 | Muzik`, 'voice');
			  message.guild.createChannel(`▬▬▬▬▬๑۩🔞۩๑▬▬▬▬▬`, 'category');
			   message.guild.createChannel(`🔞 | +18 I`, 'voice');
			    message.guild.createChannel(`🔞 | +18 II`, 'voice');
				 message.guild.createChannel(`🔞 | +18 III`, 'voice');
				  message.guild.createChannel(`▬▬▬▬▬๑۩🎮۩๑▬▬▬▬▬`, 'category');
				  message.guild.createChannel(`🎮 | Fortnite`, 'voice');
				  message.guild.createChannel(`🎮 | Pubg`, 'voice');
				  message.guild.createChannel(`🎮 | Minecraft`, 'voice');
				  message.guild.createChannel(`🎮 | Lol`, 'voice');
				  message.guild.createChannel(`🎮 | CS:GO`, 'voice');
				   message.guild.createChannel(`🎮 | Diğer`, 'voice');
				   	  message.guild.createChannel(`▬▬▬▬▬๑۩🎮۩๑▬▬▬▬▬`, 'category');
				  message.guild.createChannel(`🎮 | Fortnite II`, 'voice');
				  message.guild.createChannel(`🎮 | Pubg II`, 'voice');
				  message.guild.createChannel(`🎮 | Minecraft II`, 'voice');
				  message.guild.createChannel(`🎮 | Lol II`, 'voice');
				  message.guild.createChannel(`🎮 | CS:GO II`, 'voice');
				   message.guild.createChannel(`🎮 | Diğer II`, 'voice');



  



        message.channel.send(`Gerekli Kanalları Oluşturdum.`);
    });
});
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hazır-sunucu',
  description: 'Bot İçin gerekli kanlları kurar.',
  usage: 'l!kurulum'
};
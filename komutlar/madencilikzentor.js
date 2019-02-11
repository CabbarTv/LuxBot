const Discord = require('discord.js');
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./altin.sqlite");


exports.run = (client, message, args) => {
	sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.7 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.channel.send({embed: {
          author: {
            name: (message.author.username),
            icon_url: message.author.avatarURL
          },
          "image": {
            url:"https://cdn.discordapp.com/attachments/357222791545618443/395275027525664768/Coin-ZEC-Vanilla-512.png"},
          color: 0xD97634,
          title: "Yağsın ZentorParalar !",
          description: `:up: 1 Ton ZentorParası kazandınız ! :tada:\n:anchor: ZentorPara Miktarınız : **${curLevel}※**`
        }});
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });
  message.channel.send("ZentorParası Çıkarıyorum... Bulunca bildircem :ok_hand: Pislik içinde kaldın ! https://cdn.discordapp.com/attachments/357222791545618443/395276567540006913/Coin-ZEC-Vanilla-512.png");

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: 'madencilik',
  description: 'Altınları gösterir.',
  usage: 'madencilik'
};

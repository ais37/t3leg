var Discord = require('discord.js');
var client = new Discord.Client();

client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'shadow5') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});

client2.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'shadow5') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});

client3.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'shadow5') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});


  client.login(process.env.BOT_TOKEN);
  client2.login(process.env.BOT_TOKEN2);
  client3.login(process.env.BOT_TOKEN3);

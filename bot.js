const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('RedKatCode, connected and working. ');

           client.user.setPresence({ status: 'idle', game: { name: "%SQL STAUS: BAD" } });
    
});


client.on('message', message => {
    if (message.content === '?news') {
    	message.channel.send('Most of the news is submitted to the Welcome channel, go and check it out!');
  	}
});

client.on('message', message => {
    if (message.content === '?love') {
    	message.reply(':heart: I love you too');
  	}
});

client.on('message', message => {
    if (message.content === '?help') {
    	message.channel.send(':book: ?news - Will display the news from a dB table.');
        message.channel.send(':book: ?love - Showing some love awwwww :heart:');
  	}
});

client.on('message', message => {
    if (message.content === '?raw') {
    	message.channel.send('Version 1.0');
        message.channel.send(':computer: MySQL status :name_badge: DOWN');
          	}
});

client.on('message', message => {
    if (message.content === '?test') {
        message.channel.send('Connecting');
        const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);

// Input into config VARS for the token to connect. 

client.login(process.env.BOT_TOKEN);

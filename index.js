const Discord = require('discord.js');
// const {
	// prefix,
	// token,
	// google_api_key,
// } = require('./config.json');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const { BOTNAME, BOTVERSION, DCSERVNAME, WELCOMEMSG, HELP, PING } = require('./daveit');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
// const prefix = "?";

//ALLAPOT UZENETEK KONZOL
client.on('ready', () => {
 console.log(`Felcsatlakozva mint: ${client.user.tag}!`);
 console.log(`${BOTNAME} Elkezdett uzemelni!`);
 });
client.once('reconnecting', () => {
 console.log('Ujracsatlakozas!');
});
client.on('disconnect', () => console.log(`${BOTNAME} Lecsatlakozik.`));
client.on('reconnecting', () => console.log(`${BOTNAME} Ujracsatlakozik.`));
client.on('warn', console.warn);
client.on('error', console.error);
//

client.on('message', msg => {
  // Exit and stop if it's not there
  if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
 
  if (msg.content.startsWith(PREFIX + "ping")) {
    msg.reply(`${PING}`);
  } else
  if (msg.content.startsWith(PREFIX + "help")) {
    msg.channel.send(`${HELP}`);
  }
});

 client.on('message', msg => {
 if (msg.content === 'dprefix') {
 msg.reply(`${BOTNAME} parancsok prefixe: ${PREFIX}`);
 }
 });
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
});

 
// WELCOME MSG
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  if (!channel) return;
  channel.send(`${WELCOMEMSG}`);
});
//
client.login(TOKEN);
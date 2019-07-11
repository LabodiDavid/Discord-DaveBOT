const Discord = require('discord.js');
// const {
	// prefix,
	// token,
	// google_api_key,
// } = require('./config.json');
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
// const prefix = "?";

//ALLAPOT UZENETEK KONZOL
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 console.log(`DaveBOT STARTED RUNNING!`);
 });
client.once('reconnecting', () => {
 console.log('Ujracsatlakozas!');
});
client.on('disconnect', () => console.log('DaveBOT Lecsatlakozik.'));
client.on('reconnecting', () => console.log('DaveBOT Ujracsatlakozik.'));
client.on('warn', console.warn);
client.on('error', console.error);
//

client.on('message', msg => {
  // Exit and stop if it's not there
  if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
 
  if (msg.content.startsWith(PREFIX + "ping")) {
    msg.reply(`DaveBOT pingje a Discord szerverhez: ${client.ping} ms`);
  } else
  if (msg.content.startsWith(PREFIX + "help")) {
    msg.channel.send(`DaveBOT Parancsok (Előtag: ${PREFIX}) : \nhelp - Parancsok listája\nping - BOT válaszideje a Discord szervereihez\n(Előtag nélkül)dprefix - DaveBOT előtagjának kiíratása`);
  }
});

 client.on('message', msg => {
 if (msg.content === 'dprefix') {
 msg.reply(`DaveBOT parancsok prefixe: ${PREFIX}`);
 }
 });
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
});
//MUSICBOT
//
 
// WELCOME MSG
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Üdvözöllek a DaveIT Services Discord szerverén, ${member}! \nDaveBOT parancsok listája: ${prefix}help`);
});
//
client.login(TOKEN);
// client.login('NTk4NDkxMTQ4OTk4Mjc5MjIw.XSXa1g.87MmrjvoQN57g16CV7_Df7XgP8Y');
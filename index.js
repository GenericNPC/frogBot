const Discord = require('discord.js');
const bot = new Discord.Client();
i = 0;

const token = "NzI0MTAzNDE4MTQyMTMwMjU3.Xu7UcQ._D3y54vVKPFA-8_ezHoE5BbnrMk";


bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', msg => {
    if (msg.content === "!frogme") {
        if (i == 0) {
            msg.reply('https://cdn.mos.cms.futurecdn.net/NVzSPWPoNmm5LRZWWSwCkc-1200-80.jpg');
        }
        if (i == 1) {
            msg.reply('https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/04/0000202331-hero.jpg');
        }
        if (i == 2) {
            msg.reply('https://cdn.mos.cms.futurecdn.net/rqoDpnCCrdpGFHM6qky3rS-650-80.jpg');
        }
        if (i == 3) {
            msg.reply('https://i.ytimg.com/vi/mIeRRuO09i4/maxresdefault.jpg');
        }
        if (i == 4) {
            msg.reply('https://media.australianmuseum.net.au/media/dd/images/Rhinella_marina_Border_Ranges_NP.width-1600.a2aaf34.jpg');
        }
        if (i == 5) {
            msg.reply('https://image-cdn.neatoshop.com/styleimg/16331/none/lightturquoise/default/266978-20;1588125395u.jpg');
        }
        if (i == 6) {
            msg.reply('https://images-na.ssl-images-amazon.com/images/I/81lMlg0YzbL._AC_SX522_.jpg');
        }
        if (i == 7) {
            msg.reply('https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/z915hnpkaejejeviudrm/do-a-kermit-the-frog-impression.png');
        }
        if (i == 8) {
            msg.reply('https://media.australianmuseum.net.au/media/dd/images/Some_image.width-1200.bf0579f.jpg');
        }
        if (i == 9) {
            msg.reply('https://cdn.mos.cms.futurecdn.net/vKA7hjskQQPzCeJ99mKjNX-1200-80.jpg');
        }
        if (i == 10) {
            msg.reply('https://static.turbosquid.com/Preview/2014/05/13__03_39_13/tfrog_render00_1.jpg794aadb9-a318-4117-96eb-f22fce887c10Original.jpg');
        }
        i++;
        if (i == 10) {
            i = 0;
        }
    }
});

bot.login(token);
//frogBot
const Discord = require('discord.js');
const bot = new Discord.Client();
pictures = 0;
facts = 0;

const token = "";


bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', msg => {
    if (msg.content === "!frogme") {
        if (pictures == 0) {
            msg.reply('https://cdn.mos.cms.futurecdn.net/NVzSPWPoNmm5LRZWWSwCkc-1200-80.jpg');
        }
        if (pictures == 1) {
            msg.reply('https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/04/0000202331-hero.jpg');
        }
        if (pictures == 2) {
            msg.reply('https://cdn.mos.cms.futurecdn.net/rqoDpnCCrdpGFHM6qky3rS-650-80.jpg');
        }
        if (pictures == 3) {
            msg.reply('https://i.ytimg.com/vi/mIeRRuO09i4/maxresdefault.jpg');
        }
        if (pictures == 4) {
            msg.reply('https://media.australianmuseum.net.au/media/dd/images/Rhinella_marina_Border_Ranges_NP.width-1600.a2aaf34.jpg');
        }
        if (pictures == 5) {
            msg.reply('https://image-cdn.neatoshop.com/styleimg/16331/none/lightturquoise/default/266978-20;1588125395u.jpg');
        }
        if (pictures == 6) {
            msg.reply('https://images-na.ssl-images-amazon.com/images/I/81lMlg0YzbL._AC_SX522_.jpg');
        }
        if (pictures == 7) {
            msg.reply('https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/z915hnpkaejejeviudrm/do-a-kermit-the-frog-impression.png');
        }
        if (pictures == 8) {
            msg.reply('https://media.australianmuseum.net.au/media/dd/images/Some_image.width-1200.bf0579f.jpg');
        }
        if (pictures == 9) {
            msg.reply('https://cdn.mos.cms.futurecdn.net/vKA7hjskQQPzCeJ99mKjNX-1200-80.jpg');
        }
        if (pictures == 10) {
            msg.reply('https://static.turbosquid.com/Preview/2014/05/13__03_39_13/tfrog_render00_1.jpg794aadb9-a318-4117-96eb-f22fce887c10Original.jpg');
        }
        if (pictures == 11) {
            msg.reply('https://images-ext-2.discordapp.net/external/AbjQybax4QzYxiFcnbfrVvxSCCHgO7psIGgWDKBXdpQ/https/pbs.twimg.com/media/EZvCzW_XgAEQWyy.png%3Alarge?width=389&height=467');
        }
        pictures++;
        if (pictures == 12) {
            pictures = 0;
        }
    }
    else if (msg.content === "!frogfacts") {
        if (facts == 0) {
            msg.reply("You may have heard of messenger pigeons, but have you heard of messenger frogs? Before the widespread adoption of electical messaging in swampland areas, frogs were used to help deliver messages due to their increased mobility in the water.");
        }
        else if (facts == 1) {
            msg.reply("Many weapons have been used in WWII, but by far, the strangest among them is frogs. They were used to carry miniature explosives into enemy camps and explode on the bodies of sleeping enemy soldiers.");
        }
        else if (facts == 2) {
            msg.reply("Animals have many ways of attracting mates, and frogs have one of the most interesting methods to do so. They grow additional legs to become faster, and they mock predators by getting close to them, and running at breakneck speeds, all for the sake of impressing potential mates.");
        }
        else if (facts == 3) {
            msg.reply("Frogs temporarily allied themselves with the Simian ruler of a tropical island to repel a horde of pirate alligators that attempted an invasion.");
        }
        else if (facts == 4) {
            msg.reply("Before a series of incidents with frogs, there were no traffic laws. Any car accidents were merely marked as the driver's fault, but after a car accident where a frog caused a car to slip off the road, car companies were required to sell cars with slip resistant tires.");
        }
        else if (facts == 5) {
            msg.reply("In Africa, frogs are a delicacy, noted particularly for their slimy texture. There are several recipes that involve using frog mucus as an ingredient. There are also countless records of children running to their parents excited for dinner after smelling boiling frogs.");
        }
        facts++;
        if (facts == 6) {
            facts = 0;
        }
    }
});

bot.login(token);
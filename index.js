//frogBot
const Discord = require('discord.js');
const bot = new Discord.Client();
var facts = '0';
var pictures = '0';
var test1 = '1';
var test2 = '2';
var test3 = '3';
var test4 = '4';
loop = '0';

const token = "";
const PREFIX = 'f!';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Contemplating Ms. Piggy\'s thighs.\n Type \"f!help\" for commands.');
    setInterval(() => {
        bot.user.setActivity('Contemplating Ms. Piggy\'s thighs.\n Type \"f!help\" for commands.');
    }, 5000000);

});

bot.on('message', msg => {
    bot.user.setActivity('Contemplating Ms. Piggy\'s thighs.\n Type \"f!help\" for commands.');
    if (msg.content[0] == 'f' && msg.content[1] == '!') {
        let args = msg.content.substring(PREFIX.length).split(" ");
        switch (args[0]) {
            case 'help':
                msg.reply('\nf!frogme - Send a picture of a friendly frog!' +
                    '\nf!frogfacts - Give me interesting 100% accurate frog trivia!' +
                    '\nf!git - Give me a link to the source code for this bot.' +
                    '\nf!help - Display this message');
                break;
            case 'ping':
                msg.reply('pong!');
                break;
            case 'frogme':
                loop = 1;
                test4 = test3;
                test3 = test2;
                test2 = test1;
                pictures = Math.trunc((Math.random() * 13) + 1);
                while (loop == 1){
                    if (pictures == test1 || pictures == test2 || pictures == test3 || pictures == test4) {
                        pictures = Math.trunc((Math.random() * 13) + 1);
                    } else {
                        loop = 0;
                    }
                } 
                test1 = pictures;
                if (pictures == 1) {
                    msg.channel.send('https://cdn.mos.cms.futurecdn.net/NVzSPWPoNmm5LRZWWSwCkc-1200-80.jpg');
                }
                if (pictures == 2) {
                    msg.channel.send('https://www.britannica.com/explore/savingearth/wp-content/uploads/sites/4/2019/04/0000202331-hero.jpg');
                }
                if (pictures == 3) {
                    msg.channel.send('https://cdn.mos.cms.futurecdn.net/rqoDpnCCrdpGFHM6qky3rS-650-80.jpg');
                }
                if (pictures == 4) {
                    msg.channel.send('https://i.ytimg.com/vi/mIeRRuO09i4/maxresdefault.jpg');
                }
                if (pictures == 5) {
                    msg.channel.send('https://media.australianmuseum.net.au/media/dd/images/Rhinella_marina_Border_Ranges_NP.width-1600.a2aaf34.jpg');
                }
                if (pictures == 6) {
                    msg.channel.send('https://image-cdn.neatoshop.com/styleimg/16331/none/lightturquoise/default/266978-20;1588125395u.jpg');
                }
                if (pictures == 7) {
                    msg.channel.send('https://images-na.ssl-images-amazon.com/images/I/81lMlg0YzbL._AC_SX522_.jpg');
                }
                if (pictures == 8) {
                    msg.channel.send('https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/z915hnpkaejejeviudrm/do-a-kermit-the-frog-impression.png');
                }
                if (pictures == 9) {
                    msg.channel.send('https://media.australianmuseum.net.au/media/dd/images/Some_image.width-1200.bf0579f.jpg');
                }
                if (pictures == 10) {
                    msg.channel.send('https://cdn.mos.cms.futurecdn.net/vKA7hjskQQPzCeJ99mKjNX-1200-80.jpg');
                }
                if (pictures == 11) {
                    msg.channel.send('https://static.turbosquid.com/Preview/2014/05/13__03_39_13/tfrog_render00_1.jpg794aadb9-a318-4117-96eb-f22fce887c10Original.jpg');
                }
                if (pictures == 12) {
                    msg.channel.send('https://images-ext-2.discordapp.net/external/AbjQybax4QzYxiFcnbfrVvxSCCHgO7psIGgWDKBXdpQ/https/pbs.twimg.com/media/EZvCzW_XgAEQWyy.png%3Alarge?width=389&height=467');
                }
                if (pictures == 13) {
                    msg.channel.send('https://tenor.com/view/spin-kermit-the-frog-funny-feels-like-pool-gif-15324912');
                }
                break;
            case 'frogfacts':
                test4 = test3;
                test3 = test2;
                test2 = test1;
                facts = Math.trunc((Math.random() * 6) + 1);
                while (loop == 1) {
                    if (facts == test1 || facts == test2 || facts == test3 || facts == test4) {
                        facts = Math.trunc((Math.random() * 6) + 1);
                    } else {
                        loop = 0;
                    }
                } 
                test1 = facts;
                if (facts == 1) {
                    msg.reply("You may have heard of messenger pigeons, but have you heard of messenger frogs? Before the widespread adoption of electical messaging in swampland areas, frogs were used to help deliver messages due to their increased mobility in the water.");
                }
                else if (facts == 2) {
                    msg.reply("Many weapons have been used in WWII, but by far, the strangest among them is frogs. They were used to carry miniature explosives into enemy camps and explode on the bodies of sleeping enemy soldiers.");
                }
                else if (facts == 3) {
                    msg.reply("Animals have many ways of attracting mates, and frogs have one of the most interesting methods to do so. They grow additional legs to become faster, and they mock predators by getting close to them, and running at breakneck speeds, all for the sake of impressing potential mates.");
                }
                else if (facts == 4) {
                    msg.reply("Frogs temporarily allied themselves with the Simian ruler of a tropical island to repel a horde of pirate alligators that attempted an invasion.");
                }
                else if (facts == 5) {
                    msg.reply("Before a series of incidents with frogs, there were no traffic laws. Any car accidents were merely marked as the driver's fault, but after a car accident where a frog caused a car to slip off the road, car companies were required to sell cars with slip resistant tires.");
                }
                else if (facts == 6) {
                    msg.reply("In Africa, frogs are a delicacy, noted particularly for their slimy texture. There are several recipes that involve using frog mucus as an ingredient. There are also countless records of children running to their parents excited for dinner after smelling boiling frogs.");
                }
                break;
            case 'git':
                msg.reply('https://github.com/GenericNPC/frogBot');
                break;
        }
    }
});

bot.login(token);
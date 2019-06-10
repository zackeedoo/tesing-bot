const botconfig = require('./botconfig.json');
const Discord = require('discord.js');

const bot = new Discord.Client({ disableEveryone: true })

bot.on('ready', async () => {
    console.log(`${bot.user.username} is online!`);
    while (true) {
        bot.user.setActivity('Chris buy a gun...', { type: 3 })
        await wait(5000)
        bot.user.setActivity('Cyre buy bullets...', { type: 3 })
        await wait(5000)
        bot.user.setActivity('Thomas load bullets...', { type: 3 })
        await wait(5000)
        bot.user.setActivity('Hitman execute Peter!', { type: 3 })
        await wait(5000)
    }
});

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];

    if (message.content === 'hello' || message.content === 'hey' || message.content === 'hi') {
        return message.channel.send(`Hello ${message.author}!`)
    }

    if (!cmd.startsWith('!', [0])) {
        return
    }

    if (cmd === prefix + 'training') {
        message.member.addRole('585878951428358155');
        return message.channel.send('<@&587248463176007713>, <@' + message.author.id + '> needs training!')
    }
    else if (cmd === prefix + 'interview') {
        message.member.addRole('587377545205252116');
        return message.channel.send(`<@&587248463176007713>, <@${message.author.id}> needs an interview!`)

    }
    else if (cmd === prefix + 'chp') {
        message.member.addRole('572745109523791908');
        return message.channel.send(`Addded the 'CHP' role to <@${message.author.id}>.`)
    }
    else if (cmd === prefix + 'sheriff') {
        message.member.addRole('572749757752147988');
        return message.channel.send(`Addded the 'Sheriff' role to <@${message.author.id}>.`)
    }
    else if (cmd === prefix + 'setactivity') {
        return bot.user.setActivity()
    }
    else if (cmd === prefix + 'joinchannel') {
        return message.member.voiceChannel.join().then(() => { message.delete() })
    }
    else {
        return message.channel.send('Unknown command! Use !help to get a list of the commands.')
    }
})

bot.login(botconfig.token);
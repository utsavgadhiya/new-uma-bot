'use strict'

// import telegraf.js and dotenv
const { Telegraf } = require('telegraf')
require('dotenv').config()

const helpMessage = 'Hello there, I am New Uma\'s own Butler! Nice to meet you.\
\n\nAs of now I can\'t do much stuff. But my creator, Utsav is working on it. \nTill than you can \
request some of the feature you want from me in near future. \n\nJust write /feat and add your requests. \
Have a great day ahead!'

// intialize bot instance and fetch the token from env
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.help((ctx) => ctx.reply(helpMessage))
bot.start((ctx) => ctx.reply('At the moment this is not supported. Please come back later.'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.command('feat', (ctx) => ctx.reply('Please enter your request seperated by commas.'))
// bot.command('/congrats', (ctx) => ctx.reply('Congratulations, Taksh Patel for your engagement. But I\'ve heard \
// that you left the group for no reason. That is not what I\'ve expected from a good friend like you!.'))

// bot.command('hipster', Telegraf.reply('λ'))
// bot.command('info', ({ replyWithHTML }) => replyWithHTML('<b>What do you wanna know?</b>'))
bot.hears(new RegExp('/[a-zA-Z0-9!@#$%^&*]'), (ctx) => ctx.reply('\nHmm... I\'m not sure what you want. \
use /help for more references.'))

bot.launch()
// bot.startPolling()

console.log('Successfully running !');

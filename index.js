'use strict'

// import Composer and dotenv
const { Composer } = require('micro-bot')

const helpMessage = 'Hello there, I am New Uma\'s own Butler! Nice to meet you.\
\n\nAs of now I can\'t do much stuff. But my creator, Utsav is working on it. \nTill than you can \
request some of the feature you want from me in near future. \n\nJust write /feat and add your requests. \
Have a great day ahead!'

// intialize bot instance
const bot = new Composer()
console.debug('Authenticated!')

bot.command('feat', async (ctx) => ctx.reply('Please enter your request seperated by commas.'))

// bot.help((ctx) => ctx.reply(helpMessage))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.command('feat', (ctx) => ctx.reply('Please enter your request seperated by commas.'))
// bot.command('info', ({ replyWithHTML }) => replyWithHTML('<b>What do you wanna know?</b>'))
bot.command(/m/, (ctx) => ctx.reply('\nHmm... I\'m not sure what you want. \
use /help for more references.'))

bot.start(async ({ from, replyWithMarkdown, botInfo }) =>
  replyWithMarkdown(`Hi *${from.first_name || from.username}*,
Welcome, I am *${botInfo.first_name}*. Nice to meet you!`));

console.log('Successfully running!');

module.exports = bot

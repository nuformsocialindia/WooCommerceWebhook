const TelegramBot = require("node-telegram-bot-api");
const {db} = require("../database");

//Telegram bot config
const token = process.env.TELEGRAM_TOKEN;

//bot instance
const bot = new TelegramBot(token, { polling: false });

//login function
bot.onText(/\/login (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

if (resp == process.env.LOGIN_PASSWORD.toString()  )  {

    // get all admin users 
    chatIds = await db.getData("/adminUsers/TelegramChatIds");
    // check if the user is already an admin
    if(!chatIds.includes(chatId))
        { db.push("/adminUsers/TelegramChatIds", [chatId], false);
        bot.sendMessage(chatId, "You are now an admin");
    }else bot.sendMessage(chatId, "You are already an admin ");
}else {bot.sendMessage(chatId, "wrong Password");}
  });

//send report function
async function  TelegramSendReport(message, chatIds ) {
    chatIds.forEach((chatId) => {
  bot.sendMessage(chatId, message);
    });
}

module.exports = { bot, TelegramSendReport };

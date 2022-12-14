const TelegramBot = require("node-telegram-bot-api");
const {db} = require("../database");

//Telegram bot config
const token = process.env.TELEGRAM_TOKEN;

//bot instance
const bot = new TelegramBot(token, { polling: true });

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
  
  //add email to admin section
bot.onText(/\/addemail (.+)/,async (msg, match) => {
    const chatId = msg.chat.id;
    const Email = match[1]; // the captured "whatever"
    // get all admin users 
    chatIds = await db.getData("/adminUsers/TelegramChatIds");
    // check if the user is already an admin
    if(chatIds.includes(chatId)){
        Emails = await db.getData("/adminUsers/Emails");
        if(!Emails.includes(Email))
        {db.push("/adminUsers/Emails", [Email], false);
        bot.sendMessage(chatId, "Email added");}  
        else bot.sendMessage(chatId, "Email already added");
        
    }else bot.sendMessage(chatId, "You are not an admin ");
  });

//send report function
async function  TelegramSendReport(message, chatIds ) {
    chatIds.forEach((chatId) => {
  bot.sendMessage(chatId, message);
    });
}

module.exports = { bot, TelegramSendReport };

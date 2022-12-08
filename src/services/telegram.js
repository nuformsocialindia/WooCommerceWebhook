const TelegramBot = require("node-telegram-bot-api");
const { JsonDB, Config } = require("node-json-db");

//Database config
var db = new JsonDB(new Config("myDataBase", true, false, "/"));3

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
    chatIds = await db.getData("/adminusers");
    // check if the user is already an admin
    if(!chatIds.includes(chatId))
        { db.push("/adminusers", [chatId], false);
        bot.sendMessage(chatId, "You are now an admin");
    }else bot.sendMessage(chatId, "You are already an admin ");
}else {bot.sendMessage(chatId, "wrong Password");}
  });

//send report function
async function  sendReport(message) {
    const chatIds = await db.getData("/adminusers");
    chatIds.forEach((chatId) => {
  bot.sendMessage(chatId, message);
    });
}

module.exports = { bot, sendReport };

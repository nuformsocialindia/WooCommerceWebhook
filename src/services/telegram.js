const TelegramBot = require("node-telegram-bot-api");
const { JsonDB, Config } = require("node-json-db");
var db = new JsonDB(new Config("myDataBase", true, false, "/"));
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/login (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
if (resp == process.env.LOGIN_PASSWORD.toString()  ) {
    db.push("/adminusers", [chatId], false);
    bot.sendMessage(chatId, "You are now an admin");
}else {bot.sendMessage(chatId, "wrong Password");}
  });

function sendMessage(chatId, message) {
  bot.sendMessage(chatId, message);
}

function sendReport(message) {
  bot.sendMessage(chatId, message);
}

module.exports = { bot, sendMessage, sendReport };

const {TelegramSendReport } = require("../services/telegram");
const { EmailSendReport } = require("../services/smtp");

async function  sendReport(report) {

    
    await TelegramSendReport(report).catch(console.error);
    await EmailSendReport(report).catch(console.error);
    
}

module.exports = { sendReport };
const {TelegramSendReport } = require("../services/telegram");
const { EmailSendReport } = require("../services/smtp");
const { db } = require("../database");
const {telegramRefactorReport , smtpRefactorReport} = require("../services/refactorreport");

async function  sendReport(report) {

  //report design
   const telegramreport = await telegramRefactorReport(report);
   const smtpreport = await smtpRefactorReport(report);

    //get admin users
    const chatIds = await db.getData("/adminUsers/TelegramChatIds");
    const emails = await db.getData("/adminUsers/Emails");

    //send report
    await TelegramSendReport(telegramreport,chatIds).catch(console.error);
    // await EmailSendReport(telegramreport,emails).catch(console.error);
    
}

module.exports = { sendReport };
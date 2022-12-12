const {TelegramSendReport } = require("./telegram");
const { EmailSendReport } = require("./smtp");
const { db } = require("../database");
const {telegramRefactorReport , smtpRefactorReport} = require("./refactorreport");

async function  sendReport(report) {

  //report design
   const telegramreport = await telegramRefactorReport(report);
   const Htmlsmtpreport = await smtpRefactorReport(report);

    //get admin users
    const chatIds = await db.getData("/adminUsers/TelegramChatIds");
    const emails = await db.getData("/adminUsers/Emails");

    //send telegram report
    await TelegramSendReport(telegramreport,chatIds).catch(console.error);
    //send email report
    const Subject = "New Order : "+report.id;
     await EmailSendReport(Subject,emails,Htmlsmtpreport,telegramreport,).catch(console.error);
    
}

module.exports = { sendReport };
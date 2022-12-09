const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function EmailSendReport(report) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL , // generated ethereal user
      pass: process.env.SMTP_PASSWORD , // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    // from: '"Nutrilez food" <email@email.com>', // sender address
    from: process.env.SMTP_EMAIL_NAME+'<'+process.env.SMTP_EMAIL+'>', // sender address
    to: "dev@nuformsocial.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: report, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Email sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// EmailSendReport().catch(console.error);

module.exports = { EmailSendReport };
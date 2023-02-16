require('dotenv').config()
const nodemailer = require("nodemailer");

async function main(mailto, mailsubject, mailtext, mailhtml) {

  let transporter = nodemailer.createTransport({
    host: process.env.SMTPSERVER,
    port: process.env.SMTPPORT,
    secure: false, 
    auth: {
      user: process.env.USERPASS,
      pass: process.env.EMAILPASS
    }
  });


  let info = await transporter.sendMail({
    from: process.env.SENDNAME, // sender address
    to: mailto,
    subject: mailsubject, 
    text: mailtext, 
    html: mailhtml,
  });

  console.log("Message sent: %s", info.messageId);
}

main("no@example.com", "Hello ✔", "Hello world?",  "<b>Hello world?</b>").catch((err) => {
    console.log("error");
    console.log(err);
});


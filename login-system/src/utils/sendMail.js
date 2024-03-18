// to send email form server first you have to =>
//use 2-step verification and generate app password
//insted of using your password use app password of gmail
//for this go to the => manage your account => security setting and=>enable 2-step verifiction =>crete app pssword (select other option)
import nodemailer from "nodemailer";
import { emailHost, fromEmail, fromPassword } from "../config/constant.js";
// import { emailHost, fromEmail, fromPassword } from "../config/config.js";
// the main thing in this file is trasporterInfo and mailInfo
//neglet other part

//transporterInof gives form information while mailInof gives to info
let transporterInfo = {
  // host: emailHost,
  host: emailHost,
  // if from is gmail use gmail smtp
  port: 587,
  secure: false,
  //   auth user and pass play the role from
  auth: {
    // note user and pass most be genuine
    //it is the email through which email is send
    user: fromEmail,
    pass: fromPassword,
    //insted of using your password use app password of google
    //for this go to the => manage your account => security setting and=>enable 2-step verifiction =>crete app pssword (select other option)
  },
};

export let sendMail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo); //transporter gives from information
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

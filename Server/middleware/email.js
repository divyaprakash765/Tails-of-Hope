import { transporter } from "./emailConfig.js";
import { Verification_Email_Template, Welcome_Email_Template } from "./emailTemplate.js";

export const sendVerificationCode = async (verificationCode,email)=>{
    try {
        const response = await transporter.sendMail({
    from: '"tails of hope" <divyaprakashburnwal2@gmail.com>',
    to: email,
    subject: "verify your email",
    text: "verify your email", // plain‑text body
    html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // HTML body
  });
  console.log("email send successfully",response);
    } catch (error) {
        console.log(error);
    }
}

export const sendWelcomeEmail=async(email,name)=>{
    try {
     const response=   await transporter.sendMail({
            from: '"Zahid" <zahidtime313@gmail.com>',

            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",name)
        })
        console.log('Email send Successfully',response)
    } catch (error) {
        console.log('Email error',error)
    }
}
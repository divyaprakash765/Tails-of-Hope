import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "divyaprakashburnwal2@gmail.com",
    pass: "sxje mwyl llpf xxgl",
  },
});

const sendEmail = async (req,res)=>{
    try {
        
    } catch (error) {
     console.log(error);
    }
}

sendEmail();
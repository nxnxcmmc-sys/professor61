// emailConfig.js
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "askagz528@gmail.com",
    pass: "xknq oyma pdby ajva"
  }
});

import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgetPasswordToken: hashedToken,
        forgetPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
        // TODO:add there to .env file
      },
    });

    // const mailOptions = {
    //   from: "vr7064300@gmai.com",
    //   to: email,
    //   subject:
    //     emailType === "VERIFY" ? "Verify your email" : "Reset your password",
    //   html: `<p>Click <a href="${
    //     process.env.DOMAIN
    //   }/verifyemail?token=${hashedToken}">here</a> to ${
    //     emailType === "VERIFY" ? "verify your email" : "reset your password"
    //   }

    //  or copy and paste the link below in your broswer. <br> ${
    //    process.env.DOMAIN
    //  }/verifyemail?token=${hashedToken}
    //   </p>`,
    // };

    // Prepare email content
    const emailContent =
      emailType === "VERIFY"
        ? {
            subject: "Verify your email",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to verify your email.</p>
               <p>Or copy and paste the link below into your browser: <br>
               ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`,
          }
        : {
            subject: "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">here</a> to reset your password.</p>
               <p>Or copy and paste the link below into your browser: <br>
               ${process.env.DOMAIN}/resetpassword?token=${hashedToken}</p>`,
          };

    // Send the email
    const mailOptions = {
      from: process.env.MYEMAIL,
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

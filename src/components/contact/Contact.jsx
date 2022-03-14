import React from "react";
import { useState } from "react";
import "./contact.scss";
// import nodemailer from "nodemailer";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    // async function main() {
    //   // Generate test SMTP service account from ethereal.email
    //   // Only needed if you don't have a real mail account for testing
    //   // let testAccount = await nodemailer.createTestAccount();

    //   // create reusable transporter object using the default SMTP transport
    //   let transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: "", // generated ethereal user   process.env.EMAIL
    //       pass: "000", // generated ethereal password  ^^^^^^^^^^^
    //     },
    //   });

    //   // send mail with defined transport object
    //   let info = await transporter.sendMail({
    //     from: '"Corey Boensch" <cboensch6505@gmail.com>', // sender address
    //     to: "coreyboensch@devcorey.com,", // list of receivers
    //     cc: "cboensch6505@gmail.com",
    //     subject: `Message from ${formData.email}`, // Subject line
    //     html: `<b> Message from: ${formData.email} </b>
    //           `, // html body
    //   });

    //   console.log("Message sent: %s", info.messageId);
    //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //   // Preview only available when sending through an Ethereal account
    //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // }

    // main().catch(console.error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          <img src="assets/transparentcblogo.png" alt="" />
        </form>
      </div>
    </div>
  );
}

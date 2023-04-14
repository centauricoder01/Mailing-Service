const { authModel } = require("../Models/Auth.models");
const bcrypt = require("bcrypt");
require("dotenv").config();
const nodemailer = require("nodemailer");

const signupUser = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rajendrapateljobs@gmail.com",
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "rajendrapateljobs@gmail.com",
    subject: "Mail from Your Portfolio.",
    html: `<h3>Hi Rajendra,</h3><p>This is the <strong>${name}</strong>.</p>
    <p> ${message}</p>
    <p>Thanks.</p>
    `,
  };

  try {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      }
    });

    res.send({ message: "Email Send to the users" });
  } catch (error) {
    res.send({ message: "Some Error Occured" });
  }
};

module.exports = { signupUser };

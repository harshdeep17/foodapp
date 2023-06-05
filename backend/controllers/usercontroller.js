const User = require('../models/user.model');
const nodemailer = require('nodemailer');
const speakeasy = require('speakeasy');
require('dotenv').config();

const sendOTP = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const generateOTPSecret = () => {
  const secret = speakeasy.generateSecret({ length: 20 });
  return secret.base32;
};

const generateOTP = (secret) => {
  return speakeasy.totp({
    secret,
    encoding: 'base32',
  });
};

const validateOTP = (otp, secret) => {
  console.log(otp, secret);
  return speakeasy.totp.verify({
    secret,
    encoding: 'base32',
    token: otp,
    // window: 1,
  });
};
register = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { name, username, email, password, address, isVerified } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser && existingUser.isVerified == false) {
      await User.deleteOne({ $or: [{ email }, { username }] });
    }

    // console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already registered' });
    }
    const otpSecret = generateOTPSecret();
    const otp = generateOTP(otpSecret);
    console.log(otpSecret, otp)
    const newUser = new User({
      name,
      username,
      email,
      password,
      address,
      otpSecret,
      isVerified
    });
    await newUser.save();
    await sendOTP(email, otp);

    res.status(201).json({ message: 'User registered successfully. Please verify your email address.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const verify = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    // console.log(user, otp)

    if (!user || !validateOTP(otp, user.otpSecret)) {
      return res.status(401).json({ error: 'Invalid OTP' });
    }

    user.isVerified = true;
    user.otpSecret = undefined;
    await user.save();

    res.json({ message: 'Email address verified successfully' });
  } catch (error) {
    console.error('Error during email verification:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports.register = register;
module.exports.verify = verify;
const User = require('../models/user.model');
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');
const speakeasy = require('speakeasy');

module.exports.register = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { name, username, email, password, address } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      // console.log("exiting user");
      return res.json({ msg: 'Email or username already registered', status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      address,
    });
    await newUser.save();

    // console.log(newUser);
    res.json({ msg: `Welcome ${newUser.username}. you registered successfully`, status: true, user: newUser });
  } catch (ex) {
    console.log(ex);
  }
};



module.exports.update_profile_pic = async (req, res, next) => {
  console.log(req.body);
  try{
    const {profilePath} = req.body;
    const user_id = req.params.user_id;
    const user =  await User.find({_id: user_id });

    if(user){
      user[0].profile_path = profilePath;
 
      await user[0].save();
      res.json({ msg: 'User profile update successfully', status: true });
    }
    else{
      res.json({msg: 'User not found', status: false});
    }
  }
  catch(ex) {
    console.log(ex);
  }
}


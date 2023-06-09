const User = require('../models/user.model');
const bcrypt = require("bcrypt");

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

module.exports.login = async (req, res, next) => {
  // console.log(req.body);
  try {
    const {email, password} = req.body;
    const existingUser = await User.findOne({ email: email });

    if (!existingUser)
      return res.json({ msg: "Your Email is Incorrect", status: false });

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    // console.log(isPasswordValid);

    if (!isPasswordValid)
      return res.json({ msg: "Your Password is Incorrect", status: false });

    delete existingUser.password;
    return res.json({ msg: `Welcome to ${existingUser.username} `, status: true, user:existingUser });
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


module.exports.update_profile_pic = async (req, res, next) => {
  console.log(req.body);
  try{
    const {updateUser} = req.body;
    const user_id = req.params.user_id;
    const existingUser =  await User.find({_id: user_id });

    if(existingUser){
      existingUser[0]=updateUser;
 
      await existingUser[0].save();
      res.status(201).json({ msg: 'User details update successfully' });
    }
    else{
      res.status(400).json({msg: 'User not found'});
    }
  }
  catch(ex) {
    console.log(ex);
  }
}
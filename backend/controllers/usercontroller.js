const User = require('../models/user.model');
<<<<<<< HEAD
const bcrypt = require("bcrypt");
=======
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c

module.exports.register = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { name, username, email, password, address } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
<<<<<<< HEAD
      // console.log("exiting user");
      return res.json({ msg: 'Email or username already registered', status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
=======
      return res.status(400).json({ message: 'Email or username already registered' });
    }
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
    const newUser = new User({
      name,
      username,
      email,
<<<<<<< HEAD
      password: hashedPassword,
=======
      password,
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
      address,
    });
    await newUser.save();

<<<<<<< HEAD
    // console.log(newUser);
    res.json({ msg: `Welcome ${newUser.username}. you registered successfully`, status: true, user: newUser });
=======
    console.log(newUser);

    res.status(201).json({ message: 'User registered successfully' });
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
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
<<<<<<< HEAD
      res.json({ msg: 'User profile update successfully', status: true });
    }
    else{
      res.json({msg: 'User not found', status: false});
=======
      res.status(201).json({ message: 'User profile update successfully' });
    }
    else{
      res.status(400).json({msg: 'User not found'});
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
    }
  }
  catch(ex) {
    console.log(ex);
  }
}

<<<<<<< HEAD
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


=======
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
module.exports.update_profile_pic = async (req, res, next) => {
  console.log(req.body);
  try{
    const {updateUser} = req.body;
    const user_id = req.params.user_id;
    const existingUser =  await User.find({_id: user_id });

    if(existingUser){
      existingUser[0]=updateUser;
 
      await existingUser[0].save();
<<<<<<< HEAD
      res.status(201).json({ msg: 'User details update successfully' });
=======
      res.status(201).json({ message: 'User details update successfully' });
>>>>>>> 9421e6e42c3641ffc0552358ee3d81ffd657854c
    }
    else{
      res.status(400).json({msg: 'User not found'});
    }
  }
  catch(ex) {
    console.log(ex);
  }
}
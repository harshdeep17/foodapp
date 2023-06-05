const User = require('../models/user.model');

module.exports.register = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { name, username, email, password, address } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Email or username already registered' });
    }
    const newUser = new User({
      name,
      username,
      email,
      password,
      address,
    });
    await newUser.save();

    console.log(newUser);

    res.status(201).json({ message: 'User registered successfully' });
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
      res.status(201).json({ message: 'User profile update successfully' });
    }
    else{
      res.status(400).json({msg: 'User not found'});
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
      res.status(201).json({ message: 'User details update successfully' });
    }
    else{
      res.status(400).json({msg: 'User not found'});
    }
  }
  catch(ex) {
    console.log(ex);
  }
}
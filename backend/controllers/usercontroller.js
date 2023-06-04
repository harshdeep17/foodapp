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


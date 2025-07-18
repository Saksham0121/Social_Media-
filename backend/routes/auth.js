const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt")
// Register (GET /api/auth/register)
router.post("/register", async (req, res) => {
  try {
    //gerneate new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })

    //save user and return response
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)

  }
}); 

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("User not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Wrong password");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json("Internal server error");
  }
});
  

module.exports = router;
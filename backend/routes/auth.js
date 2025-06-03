const router = require("express").Router();
const User = require("../models/user");

// Register (GET /api/auth/register)
router.get("/register", async (req, res) => {
    const user = new User({
      username: "John",
      email: "john@gmail.com",
      password: "123456",
    });
    await user.save();
    res.send("ok");
});

module.exports = router;

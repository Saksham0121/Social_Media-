const router = require("express").Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")


//update user
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json("Account has been updated")
    } catch (err) {
      return res.status(500).json(err);
    }

  } else {
    return res.status(403).json("you can update only your account!")
  }
})

//delete user

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("Account has been deleted successfully")
    } catch (err) {
      return res.status(500).json(err);
    }

  } else {
    return res.status(403).json("you can delete only your account!")
  }
})

//get a user
router.get("/", async (req,res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try{
    const user = userId 
      ? await User.findById(userId) 
      : await User.findOne({username:username});
    const {password,updatedAt, ...other} = user._doc
    res.status(200).json(other);
  } catch(err){
    res.status(500).json(err);
  }
})

//get friends
router.get("/friends/:userId", async (req,res) => {
  try{
    const user = await User.findById(req.params.userId)
    const friends = await Promise.all(
      user.followings.map(friendId => {
        return User.findById(friendId)
      })
    )
  let friendList = [];
  friends.map(friend => {
    const {_id, username, profilePicture} = friend;
    friendList.push({ _id, username, profilePicture })
  })
  res.status(200).json(friendList)
  }catch(err){
    res.status(500).json(err);
  }
})

// Route to follow a user
router.put("/:id/follow", async (req, res) => {
  // Check if the user is not trying to follow themselves
  if (req.body.userId !== req.params.id) {
    try {
      // Find the user who is going to be followed
      const user = await User.findById(req.params.id); //param = user who is to be follow

      // Find the user who wants to follow
      const currentUser = await User.findById(req.body.userId); // body = the curent user (you)

      // Check if the currentUser is not already following the user
      if (!user.followers.includes(req.body.userId)) {
        // Add currentUser to the user's followers list
        await user.updateOne({ $push: { followers: req.body.userId } });

        // Add user to the currentUser's followings list
        await currentUser.updateOne({ $push: { followings: req.params.id } });

        // Send success response
        res.status(200).json("user has been followed");
      } else {
        // Send error if already following
        res.status(403).json("you already follow this user");
      }
    } catch (err) {
      // Send server error if anything fails
      res.status(500).json(err);
    }
  } else {
    // Error if user tries to follow themselves
    res.status(403).json("You can't follow yourself");
  }
});


//unfollow a user 
router.put("/:id/unfollow", async (req,res)=>{
  if(req.body.userId !== req.params.id){
    try{
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if(user.followers.includes(req.body.userId)){
        await user.updateOne({$pull: {followers: req.body.userId}});
        await currentUser.updateOne({$pull: {followings:req.params.id}});
        res.status(200).json("user has been unfollowed")

      }else{
        res.status(403).json("you dont follow this user")
      }

    }catch(err){
      res.status(500).json(err)
    }
  }else{
    res.status(403).json("You cant unfollow yourself")
  }
})

module.exports = router;
 
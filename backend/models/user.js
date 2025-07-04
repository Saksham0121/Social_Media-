const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,  
      minLength: 3,
      maxLength: 20,  
      unique: true
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minLength: 6 
    },
    profilePicture: {
      type: String,
      default: ""
    },
    coverPicture: {
      type: String,
      default: ""
    },
    followers: {
      type: [String], 
      default: []
    },
    followings: {
      type: [String],
      default: []
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    desc:{
      type:String,
      max:50
    },
    city:{
      type:String,
      max:50
    },
    from:{
      type:String,
      max:50
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const Registeruser = new mongoose.Schema(
  {
    username: {
      type: String,
      required:true,
    },
    roll: {
      type: String,
      required:true,
    },
    dept: {
      type: String,
      required:true,
    },
    address:{
      type: String,
      required:true,
    },
    email: {
      type: String,
      required:true,
     
    },
    password: {
      type: String,
      required:true,
    },
    confirmpassword: {
      type: String,
      required:true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Registerusers", Registeruser);
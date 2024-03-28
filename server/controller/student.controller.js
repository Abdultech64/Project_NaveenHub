const express = require("express");
const router = express.Router();
const StudentData = require("../models/student.model");

// router.get("/",(req,res)=>{
//     res.send("welcome to home page")
// })
router.get("/", async (req, res) => {
  try {
    const allData = await StudentData.find();
    res.send(allData);
  } catch (err) {
    res.send("error message");
    console.log(err.message);
  }
});

router.post("/add-user", async (req, res) => {
  const { name, roll, dept, address, email, password, confirmpassword } =
    req.body;

  try {
    const newData = new StudentData({
      name,
      roll,
      dept,
      address,
      email,
      password,
      confirmpassword,
    });
    await newData.save();
    return res.json(await StudentData.find());
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
const express = require("express");
// const mongoose = require("mongoose");
const StudentData = require("./models/student.model");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const connectDb = require("./db");
const StudentRoutes = require("./controller/student.controller");
// const TeacherRoutes = require("./controller/student.controller");
const Registeruser = require("./models/user.model");
const middleware = require("./middleware");

app.use(express.json());
app.use(cors());
connectDb();
app.use("/student", StudentRoutes);
// app.use("/teacher", TeacherRoutes);
// app.use("/post", routes);
////////////mongodb connection


// mongoose.connect('mongodb+srv://katikejana:jana123@backend.pk0kpzg.mongodb.net/?retryWrites=true&w=majority',{
// }).then( () => console.log('DB Connected....')
//     ).catch(err => console.log(err))

/* / ///////////GET method
          
// app.get("/", (req,res) =>{
//     res.send("<h1>Hello World!!</h1>");
// }) */

///////////GET method

app.get("/register", async (req, res) => {
  try {
    const allData = await Registeruser.find();
    return res.json(allData);
  } catch (err) {
    console.log(err.message);
  }
});



////////////////GET:ID method

app.get("/getalldata/:id", async (req, res) => {
  try {
    const Data = await StudentData.findById(req.params.id);
    return res.json(Data);
  } catch (err) {
    console.log(err.message);
  }
});

///////////POST method

// app.post("/addstudent", async (req, res) => {
//   const { name, roll, department, address } = req.body;

//   try {
//     const newData = new StudentData({ name, roll, department, address });
//     await newData.save();
//     return res.json(await StudentData.find());
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// ---------------------- Register------------

app.post("/register", async (req, res) => {
  try {
    const { username, roll, dept, address, email, password, confirmpassword } =
      req.body;
    const exist = await Registeruser.findOne({ email });
    if (exist) {
      return res.status(400).send("User Already Exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("Password are not matching");
    }
    let newUser = new Registeruser({
      username,
      roll,
      dept,
      address,
      email,
      password,
      confirmpassword,
    });
    await newUser.save();
    res.status(200).send("Register Successfully");
  } catch (err) {
    console.log(err);
    return res.status(501).send("Internal Server Error");
  }
});

// -------------- Login-------------

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await Registeruser.findOne({ email });
    if (!exist) {
      return res.status(400).send("User Not Found");
    }
    if (exist.password !== password) {
      return res.status(400).send("Invalid Credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
});

// ---------------------myprofile-------

app.get("/myprofile", middleware, async (req, res) => {
  try {
    let exist = await Registeruser.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("User Not Found");
    }
    res.json(exist);
  } catch (err) {
    console.log(err);
  }
});

app.listen(8086, (req, res) => {
  console.log("Server running on port 8086");
});
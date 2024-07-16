const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const JWT_SECRET = "gybqxte356vetrvy56gu5745btwtrey56ub57nu5";
const TaskModel = require("./models/TaskModel");
const EventModel = require("./models/EventModel");
const FilesModel = require("./models/FilesModel");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static("files"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//........multer..........
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
require("./models/pdfDetails");
const PdfSchema = mongoose.model("PdfDetails");
const upload = multer({ storage: storage });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.bgbhkoo.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("DataBase Connected Succesfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  TaskModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndUpdate(
    { _id: id },
    {
      task: req.body.task,
      start: req.body.start,
      end: req.body.end,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteTask/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.findByIdAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createTask", (req, res) => {
  TaskModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createEvent", (req, res) => {
  EventModel.create(req.body)
    .then((events) => res.json(events))
    .catch((err) => res.json(err));
});

app.get("/getEvent", (req, res) => {
  EventModel.find({})
    .then((events) => res.json(events))
    .catch((err) => res.json(err));
});

//.......upload pdf....
app.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfSchema.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

//............get pdf.......
app.get("/get-files", async (req, res) => {
  try {
    PdfSchema.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

require("./models/userDetails");
const User = mongoose.model("Users");

app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid password" });
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `http://localhost:3001/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'indirapriyadharshini.mary@gmail.com',
        pass: 'gyqattwdzfhygdeo'
      }
    });
    
    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'indiramanoharan631999@gmail.com',
      subject: 'Password reset',
      text: link,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    console.log(link);
  } catch (error) {}
});

app.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not verified" });
   
  } catch (error) {
    res.send("Not verified");
  }
});

app.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    //  res.json({ status: "password updated" });
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    res.json({ status: "Something went wrong" });
  }
});

app.listen(3001, () => {
  console.log(`server is running ${process.env.PORT}`);
});

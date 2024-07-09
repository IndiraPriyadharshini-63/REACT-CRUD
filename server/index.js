const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TaskModel = require("./models/TaskModel");
const EventModel = require("./models/EventModel");
const FilesModel = require("./models/FilesModel");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/getFiles", (req, res) => {
  FilesModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log(`server is running ${process.env.PORT}`);
});

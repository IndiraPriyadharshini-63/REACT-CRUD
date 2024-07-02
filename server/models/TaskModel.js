const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task: String,
    start: {
        type: Date,
        default: Date.now
    },
    end:{
        type: Date,
        default: Date.now
    }  
});

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
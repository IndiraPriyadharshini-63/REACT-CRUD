const mongoose = require("mongoose");

const FilesSchema = new mongoose.Schema({
      name: String,
      size: Number,
      // header: Object,
      type: String 
});

const FilesModel = mongoose.model("files", FilesSchema);
module.exports = FilesModel;

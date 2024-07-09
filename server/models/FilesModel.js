const mongoose = require("mongoose");

const FilesSchema = new mongoose.Schema({
      id:Number,
      name: String,
      isFolder: Boolean,
      items: Array
});

const FilesModel = mongoose.model("files", FilesSchema);
module.exports = FilesModel;

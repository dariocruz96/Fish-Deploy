const mongoose = require("mongoose");
const { Schema } = mongoose;

const fishSchema = new Schema(
  {
    //"#": Number,
    name: String,
    sell: Number,
    where: String,
    shadow: String,
    //"Total Catches to Unlock": String,
  },

  { timestamps: false }
);

module.exports = mongoose.model("Fish", fishSchema);

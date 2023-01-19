const mongoose = require("mongoose");
const { Schema } = mongoose;

const fishSchema = new Schema(
  {
    Number: Number,
    Name: String,
    Sell: Number,
    "Spawn Rates": String,
    Where: String,
    Shadow: String,
    //"Total Catches to Unlock": String,
  },

  { timestamps: false }
);

module.exports = mongoose.model("Fish", fishSchema);

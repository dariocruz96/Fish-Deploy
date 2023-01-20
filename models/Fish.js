const mongoose = require("mongoose");
const { Schema } = mongoose;

const fishSchema = new Schema(
  {
    Number: {
      type: Number,
    },
    Name: {
      type: String,
      required: [true, "Name is required"],
    },
    Sell: {
      type: Number,
      required: [true, "Price is required"],
    },
    SpawnRates: [String],
    Where: String,
    Shadow: String,
    //"Total Catches to Unlock": String,
  },

  { timestamps: false }
);

module.exports = mongoose.model("Fish", fishSchema);

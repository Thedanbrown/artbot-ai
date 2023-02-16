const { Schema, model } = require("mongoose");

const imageSchema = new Schema({

  prompt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    imutable: true,
    default: Date.now,
  },
  url: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
});

const Image = model("Image", imageSchema);

module.exports = Image;



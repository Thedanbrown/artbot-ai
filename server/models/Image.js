const { Schema, model } = require("mongoose");

const imageSchema = new Schema({

  imageId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
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


// Do I want Image to just be a schema not model?
//do I need to add toJSON getters: true?
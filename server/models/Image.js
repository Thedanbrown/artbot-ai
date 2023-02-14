const { Schema, model } = require('mongoose');

const imageSchema = new Schema({

    // this comes from search terms/prompt
    description: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})


const Image = model('Image', imageSchema);

module.exports = Image;
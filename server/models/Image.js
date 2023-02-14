const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    // this comes from search terms/prompt
    imageId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    description: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      jpeg:{
        type: String
      }
})


const Image = model('Image', imageSchema);

module.exports = Image;

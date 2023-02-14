const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  images: [
    {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

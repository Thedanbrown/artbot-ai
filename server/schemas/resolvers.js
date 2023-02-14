const { User, Image, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "pk_test_51MZlnuFf744gHokpXhLvKw4lfR9IxjoyNOwj9DGOC76lpxKEuOnYG4U8Mp2GHqd35IBPX0ZPyuqCuQez39STMxMF004EucV16s"
);

const resolvers = {
  Query: {
    images: async () => {
      return await Image.find();
    },

    image: async (parent, { _id }) => {
      return await Image.findById(_id).populate("order");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "users.orders",
          populate: "order"
        });

        user.orders.sort((a,b) => b.purchaseDate - a.purchaseDate);
      }
    },
  },
};

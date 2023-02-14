
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


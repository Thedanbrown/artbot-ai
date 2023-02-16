const { AuthenticationError } = require("apollo-server-express");
const { User, Image, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "pk_test_51MZlnuFf744gHokpXhLvKw4lfR9IxjoyNOwj9DGOC76lpxKEuOnYG4U8Mp2GHqd35IBPX0ZPyuqCuQez39STMxMF004EucV16s"
);
const { generateImage } = require("../utils/API");

const resolvers = {
  Query: {
    openAiAPIUrl: async (parent, { prompt }) => {
      const url = await generateImage(prompt);
      return { url };
    },
    images: async (parent, { userEmail }) => {
      const params = userEmail ? { userEmail } : {};
      return Image.find(params).sort({ createdAt: -1 });
    },

    image: async (parent, { imageId }) => {
      return Image.findOne({ _id: imageId }).populate("order");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "users.orders",
          populate: "order",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: "users.orders",
          populate: "order",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ images: args.images });
      const image_array = [];

      const { images } = await order.populate("images");

      for (let i = 0; i < images.length; i++) {
        const image = await stripe.images.create({
          id: images[i]._id,
          description: images[i].description,
          jpeg: [`PLACEHOLDER FOR AI IMAGE FILE`],
        });

        const price = await stripe.prices.create({
          image: image.id,
          unit_amount: image[i].price * 100,
          currency: "usd",
        });

        image_array.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        image_array,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("orders")
          .populate("images");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { images }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ images });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    saveImage: async (parent, { prompt, url }, context) => {
      console.log("MADE IT in resolvers");

      if (context.user) {
        console.log("THIS IS USER", context.user);
        const image = await Image.create({ prompt, url });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { images: image._id } }
        );
        console.log(image);
        return image;
      }
      throw new AuthenticationError("Need to be logged in");
    },
    removeImage: async (parent, { imageId }, context) => {
      console.log("MADE IT in resolvers");
      if (context.user) {
        const image = await Image.findOneAndDelete({
          _id: imageId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { images: image._id } }
        );

        return image;
      }
      throw new AuthenticationError("Need to be logged in");
    },
  },
};

module.exports = resolvers;

const { Schema, model, mongoose } = require("mongoose");

const bcrypt = require("bcrypt");
const Order = require("./Order");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    dob: {
      type: String,
      // required: true,
      match: [
        /^((0[1-9])|(1[0-2]))\/((0[1-9])|([1-2][0-9])|(3[0-1]))\/([1-2]\d{3})$/,
        "Please enter a valid date in the format MM/DD/YYYY",
      ],
      // validate: {
      //   validator: function (dob) {
      //     const birthdate = new Date(dob);
      //     const ageDiffMs = Date.now() - birthdate.getTime();
      //     const ageDate = new Date(ageDiffMs);
      //     const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      //     return age >= 18;
      //   },
      //   message: "You must be 18 or older to sign up",
      // },
    },
    orders: [Order.schema],
    images: [
      {
        type: Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("orderCount").get(function () {
  return this.orders.length;
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

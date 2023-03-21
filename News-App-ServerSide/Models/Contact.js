const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    pseudo: {
      type: String,
      required: true,
    },
    age: Number,
  
    government: String,
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    blogs: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Blog",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContactsList", ContactSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
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
    phoneNumber : {
     type: String,
      required: true,
    },
    contributor: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      enum: ["admin", "volunteer", "vet", "donor"],
      default: "donor",
      required: true,
    },
    profile: {
      bio: { type: String },
      community: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
    },
    profilePhoto: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

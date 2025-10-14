import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },

    profileStatus: {
      type: String,
      enum: ["incomplete", "complete", "verified"],
      default: "incomplete",
    },
    bio: { type: String },
    avatarUrl: { type: String },
    location: { type: String },
  },
  { timestamps: true }
);

export const UserModel = model("User", userSchema);

import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const AdminModel = model("Admin", adminSchema);

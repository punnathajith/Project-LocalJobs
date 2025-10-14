import { Schema, model } from "mongoose";

const companySchema = new Schema(
  {
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },

    logoUrl: { type: String },
    description: { type: String },
    location: { type: String },

    profileStatus: {
      type: String,
      enum: ["incomplete", "complete", "verified"],
      default: "incomplete",
    },
  },
  { timestamps: true }
);

export const CompanyModel = model("Company", companySchema);

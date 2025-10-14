import { Schema, model } from "mongoose";

const jobSchema = new Schema(
  {
    jobTitle: { type: String, required: true },
    closeDate: { type: Date, required: true },
    location: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    salary: { type: String },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
      required: true,
    },
    requiredSkills: { type: [String], required: true },
    jobDescription: { type: String, required: true },
    applicationEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export const JobModel = model("Job", jobSchema);

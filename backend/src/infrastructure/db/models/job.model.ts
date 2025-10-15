import { Schema, model } from "mongoose";
import mongoose from "mongoose";

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
    postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "posterType", 
  },
  posterType: {
    type: String,
    required: true,
    enum: ["User", "Company"], 
  },
  },
  { timestamps: true }
);

export const JobModel = model("Job", jobSchema);




// router.post("/jobs", authMiddleware, async (req: Request, res: Response) => {
//   try {
//     // You already know who is logged in
//     const { id, type } = req.user; // from token → 'user' or 'company'

//     const jobData = {
//       ...req.body,
//       postedBy: id,
//       posterType: type, // user or company
//     };

//     const createJob = container.resolve(CreateJob);
//     const job = await createJob.execute(jobData);

//     res.status(201).json(job);
//   } catch (err: any) {
//     res.status(400).json({ message: err.message });
//   }
// });

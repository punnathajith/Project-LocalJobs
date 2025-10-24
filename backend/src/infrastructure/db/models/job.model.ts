import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const jobSchema = new Schema(
  {
    jobTitle: { type: String, required: true, trim: true },
    closeDate: { type: Date, required: true },
    location: { type: String, required: true, trim: true },
    yearsOfExperience: { type: Number, required: true, min: 0 },
    salary: { type: String, default: "Not specified" },
    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
      required: true,
    },
    requiredSkills: { type: [String], required: true },
    jobDescription: { type: String, required: true, trim: true },
    applicationEmail: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // ✅ Basic email validation
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "posterType", // ✅ Dynamic reference to either User or Company
    },
    posterType: {
      type: String,
      required: true,
      enum: ["User", "Company"],
    },
    status: {
      type: String,
      enum: ["Open", "Closed","Draft", "Expired"],
      default: "Open", 
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

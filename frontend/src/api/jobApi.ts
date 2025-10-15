import axiosInstance from "./axiosInstance";

export interface JobData {
  jobTitle: string;
  closeDate: Date; 
  location: string;
  yearsOfExperience: number;
  salary: string;
  jobType: string;
  requiredSkills: string[];
  jobDescription: string;
  applicationEmail: string;
}

export const jobApi = {
  
  createJob: (data: JobData) => axiosInstance.post("/job/create-jobs", data),
  
  getAllJobs: () => axiosInstance.get("/job/all-jobs"),
  
  getJob: (id: string) => axiosInstance.get(`/jobs/${id}`),

  applyJob: (id: string) => axiosInstance.post(`/jobs/${id}/apply`),
};

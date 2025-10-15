import Navbar from "@/components/user/Navbar";
import Sidebar from "@/components/user/Sidebar";
import LocationField from "@/components/user/LocationField";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { jobApi } from "@/api/jobApi";
import type { JobData } from "@/api/jobApi";
import Modal from "@/components/common/Modal";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    closeDate: "",
    location: "",
    yearsOfExperience: "",
    salary: "",
    jobType: "Full-time",
    requiredSkills: "",
    jobDescription: "",
    applicationEmail: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, location: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: JobData = {
      ...formData,
      closeDate: new Date(formData.closeDate),
      yearsOfExperience: Number(formData.yearsOfExperience),
      requiredSkills: formData.requiredSkills
        .split(",")
        .map((skill) => skill.trim()),
    };

    jobApi
      .createJob(payload)
      .then(() => {
        setModalOpen(true); 
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex pt-16">
          <Sidebar />
          <div className="flex-1 p-6 bg-white border border-gray-200 rounded-lg shadow-sm m-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6">Post a Job</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="grid gap-1">
                  <Label htmlFor="JobTitle">Job Title</Label>
                  <Input
                    type="text"
                    name="jobTitle"
                    placeholder="enter job title"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Close Date
                  </label>
                  <input
                    type="date"
                    name="closeDate"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter company name"
                    value={formData.closeDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <LocationField
                  onChange={handleLocationChange}
                  value={formData.location}
                />

                <div className="grid gap-1">
                  <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                  <Input
                    type="number"
                    name="yearsOfExperience"
                    placeholder="e.g., 3"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="salary">Salary</Label>
                  <Input
                    type="text"
                    name="salary"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter salary range"
                    value={formData.salary}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-sm p-2"
                    value={formData.jobType}
                    name="jobType"
                    onChange={handleChange}
                    required
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>

                    <option>Contract</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    name="requiredSkills"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="e.g., React, Node.js, TailwindCSS"
                    value={formData.requiredSkills}
                    onChange={handleChange}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Separate skills with commas
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>

                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2 h-32"
                    placeholder="Enter job description"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Application Email
                  </label>

                  <input
                    type="email"
                    name="applicationEmail"
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Enter application email"
                    value={formData.applicationEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button type="submit" className="mt-6">
                Post Job
              </Button>
            </form>
            <Modal
              isOpen={modalOpen}
              title="Job Posted Successfully!"
              message="Your job has been added."
              onClose={() => {
                setModalOpen(false);
                navigate("/view-jobs");
              }}
            />
            ;
          </div>
        </div>
      </div>
    </>
  );
};

export default PostJob;

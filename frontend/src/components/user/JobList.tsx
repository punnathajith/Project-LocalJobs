import JobCard from "./JobCards";
import type { Filters } from "./FiltersSidebar";

interface JobListProps {
  filters: Filters;
  search: string;
  sort?: string;
}

const jobs = [
  {
    title: "UI/UX Designer",
    description: "The User Experience Designer position exists to create...",
    logo: "https://i.pravatar.cc/40",
    tags: ["Full Time", "Min 1 Year", "Senior Level"],
  },
  {
    title: "Product Designer",
    description: "Design beautiful and functional digital products...",
    logo: "https://i.pravatar.cc/41",
    tags: ["Full Time", "Mid Level"],
  },
];

const JobList: React.FC<JobListProps> = ({ filters, search }) => {
  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());

    const matchEmployment =
      filters.employment.length === 0 ||
      filters.employment.some((type) =>
        job.tags.some((tag) => tag.toLowerCase().includes(type.toLowerCase()))
      );

    const matchSeniority =
      filters.seniority.length === 0 ||
      filters.seniority.some((level) =>
        job.tags.some((tag) => tag.toLowerCase().includes(level.toLowerCase()))
      );

    const matchSalary =
      filters.salary.length === 0 ||
      filters.salary.some((range) =>
        job.tags.some((tag) => tag.includes(range))
      );

    return matchSearch && matchEmployment && matchSeniority && matchSalary;
  });
  return (
    <div className="flex flex-col gap-4">
      {filteredJobs.map((job, idx) => (
        <JobCard key={idx} {...job} />
      ))}
    </div>
  );
};

export default JobList;

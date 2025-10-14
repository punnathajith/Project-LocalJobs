import { Button } from "@/components/ui/button";
import JobCard from "@/components/user/jobCard";

const featuredJobs = [
  {
    id: "1",
    title: "Delivery Driver",
    company: "QuickDelivery Express",
    distance: "2.5 km",
    salary: "₹15,000-18,000/month",
    postedTime: "2 hours ago",
    description: "Join our fast-paced delivery team. Flexible schedules, competitive pay, and benefits package available.",
    isUrgent: true,
  },
  {
    id: "2",
    title: "Licensed Electrician",
    company: "BuildRight Construction",
    distance: "5.2 km",
    salary: "₹25,000-35,000/month",
    postedTime: "4 hours ago",
    description: "Experienced electrician needed for residential and commercial projects. Must have valid license and 3+ years experience.",
  },
  {
    id: "3",
    title: "Customer Service Representative",
    company: "TechFlow Solutions",
    distance: "1.8 km",
    salary: "₹20,000-25,000/month",
    postedTime: "1 day ago",
    description: "Help customers solve technical issues via phone and chat. Training provided. Excellent communication skills required.",
  },
  {
    id: "4",
    title: "Registered Nurse",
    company: "CareFirst Medical",
    distance: "3.7 km",
    salary: "₹30,000-40,000/month",
    postedTime: "2 days ago",
    description: "Join our dedicated healthcare team. RN license required. Competitive salary and comprehensive benefits package.",
  },
  {
    id: "5",
    title: "Warehouse Associate",
    company: "LogiCore Shipping",
    distance: "4.1 km",
    salary: "₹12,000-15,000/month",
    postedTime: "3 days ago",
    description: "Entry-level warehouse position. No experience required. Great opportunity for career growth in logistics.",
  },
  {
    id: "6",
    title: "Plumbing Technician",
    company: "ProFix Services",
    distance: "6.3 km",
    salary: "₹22,000-28,000/month",
    postedTime: "3 days ago",
    description: "Residential plumbing repairs and installations. Company van and tools provided. Benefits include health insurance.",
  },
];

const Job = () => {
  return (
    <>
        <div className="space-y-6 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-foreground font-Montserrat"> <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
         Jobs Near You
        </span></h1>
              <p className="text-muted-foreground">Based on your location • {featuredJobs.length} jobs found</p>
            </div>
            <Button variant="outline" className="bg-background border-border hover:bg-muted">
              View All Jobs
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {featuredJobs.slice(0, 4).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
    </>
  )
}

export default Job;
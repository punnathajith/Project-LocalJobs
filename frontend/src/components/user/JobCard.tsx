import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {  Clock, Building2, Navigation } from "lucide-react";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    distance: string;
    salary: string;
    postedTime: string;
    description: string;
    isUrgent?: boolean;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer border bg-card hover:border-primary/20">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header with Company Logo and Urgent Badge */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
            </div>
            {job.isUrgent && (
              <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">
                Urgent
              </Badge>
            )}
          </div>

          {/* Job Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {job.description}
          </p>

          {/* Job Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Navigation className="h-4 w-4" />
                <span>{job.distance}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{job.postedTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="font-semibold text-foreground">{job.salary}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default JobCard;
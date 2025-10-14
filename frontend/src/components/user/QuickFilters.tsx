import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react"
import { 
  MapPin, 
  Calendar, 
  Clock, 
  TrendingUp, 
  Target,
  Zap
} from "lucide-react";

const filters = [
  { id: "jobs-near-me", label: "Jobs Near Me", icon: MapPin, count: 89 },
  { id: "todays-openings", label: "Today's Openings", icon: Calendar, count: 24 },
  { id: "part-time-daily", label: "Part-Time / Daily Wage", icon: Clock, count: 156 },
  { id: "most-applied", label: "Most Applied Jobs", icon: Target, count: 203 },
  { id: "trending-area", label: "Trending in My Area", icon: TrendingUp, count: 67 },
  { id: "recently-posted", label: "Recently Posted", icon: Zap, count: 142 },
  { id: "most-applieds", label: "Most Applied Jobs", icon: Target, count: 203 },
];

const QuickFilters = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-black text-foreground font-Montserrat">
         <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Quick Filters
        </span>
      </h2>
      <div className="flex flex-wrap gap-5 justify-start">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <motion.div
              key={filter.id}
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Button
                variant="outline"
                className="group h-auto p-6 flex-col gap-3 hover:bg-job-primary-light hover:border-job-primary hover:shadow-md transition-all duration-200 border-2 min-w-[140px]"
              >
                <Icon className="h-6 w-6 text-job-accent group-hover:text-blue-500 transition-colors duration-200" />
                <span className="text-sm font-semibold text-foreground">
                  {filter.label}
                </span>
                <Badge
                  variant="secondary"
                  className="text-xs bg-muted text-job-accent font-medium"
                >
                  {filter.count}
                </Badge>
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickFilters;
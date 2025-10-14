import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export interface Filters {
  employment: string[];
  seniority: string[];
  salary: string[];
}

interface FiltersSidebarProps {
  setFilters: (filters: Filters) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ setFilters }) => {
  const [filters, updateFilters] = useState({
    employment: [] as string[],
    seniority: [] as string[],
    salary: [] as string[],
  });

  const handleChange = (category: keyof typeof filters, value: string) => {
    const newFilters = { ...filters };

    if (newFilters[category].includes(value)) {
      newFilters[category] = newFilters[category].filter((v) => v !== value);
    } else {
      newFilters[category] = [...newFilters[category], value];
    }

    updateFilters(newFilters);
    setFilters(newFilters);
  };

  const employmentTypes = [
    "Full Time",
    "Part Time",
  ];
  const seniorityLevels = [
    "Student",
    "Entry",
    "Mid",
    "Senior",
    "Director",
    "VP+",
  ];
  const salaryRanges = [
    "700 - 1000",
    "1000 - 1200",
    "1200 - 1400",
    "1500 - 1800",
    "2000 - 3000",
  ];

  return (
    <div className="space-y-6">
      {/* Job Alert */}
      <div className="bg-blue-50 p-4 flex flex-col items-center rounded-xl ">
        <p className="font-semibold mb-2">Post a Job ?</p>

        <Link to="/post-job">
          <Button variant="default">Post a job</Button>
        </Link>
      </div>

      {/* Employment Type */}
      <div>
        <h3 className="font-semibold mb-3 text-gray-800">Type of Employment</h3>
        <div className="space-y-2">
          {employmentTypes.map((type) => (
            <div key={type} className="flex items-center space-x-3">
              <Checkbox
                id={type}
                checked={filters.employment.includes(type)}
                onCheckedChange={() => handleChange("employment", type)}
              />
              <Label
                htmlFor={type}
                className="text-sm font-medium text-gray-700"
              >
                {type}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-gray-800">Seniority Level</h3>
        <div className="space-y-2">
          {seniorityLevels.map((level) => (
            <div key={level} className="flex items-center space-x-3">
              <Checkbox
                id={level}
                checked={filters.seniority.includes(level)}
                onCheckedChange={() => handleChange("seniority", level)}
              />
              <Label
                htmlFor={level}
                className="text-sm font-medium text-gray-700"
              >
                {level} Level
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3 text-gray-800">Salary Range</h3>
        <div className="space-y-2">
          {salaryRanges.map((range) => (
            <div key={range} className="flex items-center space-x-3">
              <Checkbox
                id={range}
                checked={filters.salary.includes(range)}
                onCheckedChange={() => handleChange("salary", range)}
              />
              <Label
                htmlFor={range}
                className="text-sm font-medium text-gray-700"
              >
                {range}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;

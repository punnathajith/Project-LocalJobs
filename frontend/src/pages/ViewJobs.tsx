import Navbar from "@/components/user/Navbar";
import { useState } from "react";
import FiltersSidebar from "@/components/user/FiltersSidebar";
import SearchBar from "@/components/user/SearchBar";
import JobList from "@/components/user/JobList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Filters } from "@/components/user/FiltersSidebar";

const ViewJobs = () => {
  const [filters, setFilters] = useState<Filters>({
    employment: [],
    seniority: [],
    salary: [],
  });
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="px-15">
        <div className="flex min-h-screen bg-gray-50 pt-16 flex-col">
          <div className="py-6">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <div className="flex flex-1 gap-6">
            <aside className="w-72 p-4 bg-white shadow-md">
              <FiltersSidebar setFilters={setFilters} /> 
            </aside>

            <main className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="font-Geist font-bold text-xl">
                  Showing 46 jobs
                </h1>
                <div className="flex items-center">
                  <p className="text-gray-600 font-Geist font-semibold text-sm px-2">
                    Sort by:
                  </p>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[200px] p-2 font-inter font-semibold text-sm focus:outline-none">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="relevance"
                        className="text-gray-700 font-inter text-sm font-semibold"
                      >
                        Relevance
                      </SelectItem>
                      <SelectItem
                        value="date"
                        className="text-gray-700 font-inter text-sm font-semibold"
                      >
                        Date Posted
                      </SelectItem>
                      <SelectItem
                        value="salaryAsc"
                        className="text-gray-700 font-inter text-sm font-semibold"
                      >
                        Salary: Low to High
                      </SelectItem>
                      <SelectItem
                        value="salaryDesc"
                        className="text-gray-700 font-inter text-sm font-semibold"
                      >
                        Salary: High to Low
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-5">
                <JobList  filters={filters} search={search} />
               
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewJobs;

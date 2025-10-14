import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IconSearch, IconMapPin } from "@tabler/icons-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <div className="flex flex-wrap items-center bg-white rounded-md p-4 w-full border border-[#e4e4e4]">
      <div className="flex items-center text-sm w-full">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <IconSearch />
          <Input
            type="text"
            placeholder="Job Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Separator orientation="vertical" className="mx-4 flex-shrink-0" />

        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <IconMapPin />
          <Input type="text" placeholder="Location" />
        </div>

        <Separator orientation="vertical" className="mx-4 flex-shrink-0" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Job Type</SelectLabel>
              <SelectItem value="FullTime">Full Time</SelectItem>
              <SelectItem value="PartTime">Part Time</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="mx-4 flex-shrink-0" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a salary" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Salary Range</SelectLabel>
              <SelectItem value="700-1000">700 - 1000</SelectItem>
              <SelectItem value="1000-1200">1000 - 1200</SelectItem>
              <SelectItem value="1200-1400">1200 - 1400</SelectItem>
              <SelectItem value="1500-1800">1500 - 1800</SelectItem>
              <SelectItem value="2000-3000">2000 - 3000</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="mx-4 flex-shrink-0" />

        <Button variant="default">Find Job</Button>
      </div>
    </div>
  );
};

export default SearchBar;

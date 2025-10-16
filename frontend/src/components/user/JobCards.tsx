import { IconDots } from "@tabler/icons-react";

interface JobCardProps {
  title: string;
  description: string;
  // tags: string[];
}

const JobCards: React.FC<JobCardProps> = ({ title, description}) => {
  return (
    <div className="bg-white p-5 border border-gray-200 shadow-md hover:shadow-lg transition">
     <div className="border-b border-gray-200">
       <div className="flex items-center space-x-3">
        <h1 className="font-MonaSans font-[500] text-[26px]">{title}</h1>
        <IconDots className="ml-auto cursor-pointer" />
      </div>
      <p className="text-gray-500 font-MonaSans text-sm line-clamp-2 mb-3">{description}</p>
     </div>
      {/* <div className="flex flex-wrap gap-2 my-3">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            {tag}
          </span>
        ))}
      </div> */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-MonaSans text-violet-500 font-medium">Status</p>
            <p className="text-[14px] font-inter font-medium text-gray-600">Opened</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-MonaSans text-violet-500 font-medium">No of Vacancies</p>
            <p className="text-[14px] font-inter  font-medium text-gray-600">2</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-MonaSans text-violet-500 font-medium">Closing data</p>
            <p className="text-[14px] font-inter  font-medium text-gray-600">10/05/2026</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-MonaSans text-violet-500 font-medium">Location</p>
            <p className="text-[14px] font-inter  font-medium text-gray-600">Calicut,Kerala</p>
          </div>
        </div>
        <div className="flex gap-2 bg-green-100 rounded-xl text-green-500 px-2 py-1 text-[12px] font-inter font-medium">
          <span>10</span>
          <p>Applicants</p>
        </div>
      </div>
    </div>
  );
};

export default JobCards;

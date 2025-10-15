

interface JobCardProps {
  title: string;
  description: string;
  tags: string[];
}

const JobCards: React.FC<JobCardProps> = ({ title, description, tags }) => {
  return (
    <div className="bg-white p-5 border border-gray-200 shadow-md hover:shadow-lg transition">
      <div className="flex items-center space-x-3">
        <h1 className="font-MonaSans font-[500] text-[26px]">{title}</h1>
      </div>
      <p className="text-gray-500 font-MonaSans text-sm line-clamp-2 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 text-xs bg-gray-100 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Apply Now
        </button>
        <button className="border px-4 py-2 rounded-lg">Messages</button>
      </div>
    </div>
  );
};

export default JobCards;

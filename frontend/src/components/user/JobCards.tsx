

interface JobCardProps {
  title: string;
  description: string;
  logo: string;
  tags: string[];
}

const JobCards: React.FC<JobCardProps> = ({ title, description, logo, tags }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex items-center space-x-3 mb-3">
        <img src={logo} alt={title} className="w-10 h-10 rounded-md" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-500 text-sm line-clamp-2 mb-3">{description}</p>
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

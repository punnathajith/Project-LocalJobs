import { FaChartLine } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";


const BadgeDemo = () => {
  return (
    <div className="flex justify-center my-10 pt-20"> {/* Added pt-20 for navbar spacing */}
      <Badge variant="default" className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
        <FaChartLine className="w-4 h-4" />
        1000+ jobs posted this month
      </Badge>
    </div>
  );
}
export default BadgeDemo;
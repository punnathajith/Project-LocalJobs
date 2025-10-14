import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
}

const TestimonialCard = ({ name, role, avatar, review, rating }: Testimonial) => {
  return (
    <div className="w-120 bg-white rounded-2xl shadow-md p-6 font-inter space-y-4">

      <div className="flex justify-between items-start">
        <span className="text-4xl text-cyan-500">“</span>
        <div className="flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{review}</p>

      <div className="flex items-center gap-3 pt-2">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full border"
        />
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

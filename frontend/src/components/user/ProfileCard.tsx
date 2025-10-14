import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import VerifiedIcon from "./VerifiedIcon"


const ProfileCard = () => {
  return (
    <>
   <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
      {/* Avatar */}
      <img
        src="https://i.pravatar.cc/100"
        alt="avatar"
        className="w-20 h-20 rounded-full mb-3"
      />
      <h3 className="text-lg font-semibold">Cameron Williamson</h3>
      <p className="text-sm text-gray-400 mb-4">Ajithpunnath@gmail.com</p>
      <button className="text-blue-600 text-sm font-medium mb-6">
        Change Avatar
      </button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
      <h3 className="text-lg font-semibold font-Geist">Add Skills</h3>
      <p className="text-sm text-gray-500 mb-3">Add up to 5 skills</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {["UI/UX", "Web Design", "Figma", "Sketch", "Adobe XD"].map((skill) => (
          <Badge key={skill} variant="secondary">{skill}</Badge>    
        ))}
       <Button variant="ghost">Add new skill +</Button>
      </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
        <VerifiedIcon/>
      <h3 className="text-lg font-semibold font-Geist">Get verified</h3>
      <p className="text-sm text-gray-500 mb-3">Connect your digilocker to get verified</p>
      <Button variant="outline" className="text-[#0000ff]">Connect Digilocker</Button>
      </div>
   </>
  )
}

export default ProfileCard
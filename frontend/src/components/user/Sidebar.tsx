import { IconLogout } from "@tabler/icons-react"
import { Link,useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate=useNavigate();
  return (
   <aside className="w-64 bg-white p-4 flex flex-col border-r border-gray-200 min-h-screen">
      <div className="flex items-center space-x-3 my-5">
        <img
          src="https://i.pravatar.cc/50"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">Cameron Williamson</p>
          <p className="text-sm text-gray-500">cameron_williamso</p>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1 text-gray-700 font-Geist">
                  <li className="font-medium p-3 border-b-2">
          <Link to="/dashboard">📊 Dashboard</Link>
        </li>
        <li className="font-medium p-3 border-b-2">
          <Link to="/profile">👤 User Profile</Link>
        </li>
        <li className="font-medium p-3 border-b-2">
          <Link to="/view-jobs">🔍 View All Jobs</Link>
        </li>
        <li className="font-medium p-3 border-b-2">
          <Link to="/post-job">✍🏻 Post Job</Link>
        </li>
        <li className="font-medium p-3 border-b-2">
          <Link to="/saved-jobs">📂 Saved Jobs</Link>
        </li>
        <li className="font-medium p-3 border-b-2">
          <Link to="/wallet">💸 Wallet</Link>
        </li>
        <li className="font-medium p-3 border-b-2 flex gap-1 items-center">
          <button
            onClick={() => {
              navigate('/');
            }}
            className="flex gap-1 items-center"
          >
            <IconLogout size={20} /> Logout
          </button>
        </li>

        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
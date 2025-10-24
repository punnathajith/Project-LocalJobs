import Navbar from "@/components/user/Navbar";
import Sidebar from "@/components/user/Sidebar";
import React from "react";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex pt-16">
        <Sidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;

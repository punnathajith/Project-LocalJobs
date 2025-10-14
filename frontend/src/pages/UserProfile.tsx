import Navbar from "@/components/user/Navbar";
import Sidebar from "@/components/user/Sidebar";
import ProfileForm from "@/components/user/ProfileForm";
import PasswordForm from "@/components/user/PasswordForm";
import ProfileCard from "@/components/user/ProfileCard";

const UserProfile = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="flex pt-16">
                    <Sidebar />
                    <div className="flex-1 p-6 grid grid-cols-3 gap-6">
                        <div className="col-span-2 space-y-6">
                            <ProfileForm />
                            <PasswordForm />
                        </div>
                        <div className="space-y-6">
                            <ProfileCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;

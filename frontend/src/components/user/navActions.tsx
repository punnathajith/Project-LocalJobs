import { Button } from "@/components/ui/button";
import { IconBellFilled as Bell } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { Link } from "react-router-dom";

const NavActions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  if (!user) {
    return (
      <div className="flex flex-col md:flex-row gap-3 mt-6 md:mt-0">
        <Button variant="default" onClick={() => navigate("/signin")}>
          Sign-in
        </Button>
        <Button variant="ghost" onClick={() => navigate("/signup")}>
          Get started
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Bell className="cursor-pointer" size={28} />
        <Badge
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
          variant="destructive"
        >
          3
        </Badge>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-3 cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="font-inter font-bold text-md">User</p>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild><Link to='/profile'>Profile</Link></DropdownMenuItem>
          <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
          <DropdownMenuItem>Wallet</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className="text-red-600 font-semibold"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavActions;

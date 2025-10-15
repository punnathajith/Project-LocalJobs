type NavItem = {
  title: string;
  href: string;
};

type Role = "guest" | "User" | "Company" | "Admin";

export const navConfig: Record<Role, NavItem[]> = {
  guest: [
    { title: "Browse jobs", href: "/" },
    { title: "Post a Job", href: "/about-us" },
    { title: "How it Works", href: "/contact-us" },
  ],
  User: [
    { title: "Home", href: "/home" },
    { title: "My profile", href: "/profile" },
    { title: "view jobs", href: "/view-jobs" },
  ],
  Company: [
    { title: "Dashboard", href: "/company/dashboard" },
    { title: "Post a Job", href: "/company/jobs/new" },
    { title: "Manage Jobs", href: "/company/jobs" },
  ],
  Admin: [
    { title: "Admin Dashboard", href: "/admin/dashboard" },
    { title: "Manage Users", href: "/admin/users" },
    { title: "Reports", href: "/admin/reports" },
  ],
};

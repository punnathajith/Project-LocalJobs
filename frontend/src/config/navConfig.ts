type NavItem = {
  title: string;
  href: string;
};

type Role = "guest" | "user" | "company" | "admin";

export const navConfig: Record<Role, NavItem[]> = {
  guest: [
    { title: "Browse jobs", href: "/" },
    { title: "Post a Job", href: "/about-us" },
    { title: "How it Works", href: "/contact-us" },
  ],
  user: [
    { title: "Home", href: "/home" },
    { title: "My profile", href: "/profile" },
    { title: "view jobs", href: "/view-jobs" },
  ],
  company: [
    { title: "Dashboard", href: "/company/dashboard" },
    { title: "Post a Job", href: "/company/jobs/new" },
    { title: "Manage Jobs", href: "/company/jobs" },
  ],
  admin: [
    { title: "Admin Dashboard", href: "/admin/dashboard" },
    { title: "Manage Users", href: "/admin/users" },
    { title: "Reports", href: "/admin/reports" },
  ],
};

import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Authlayout from "./pages/Authlayout";
import Signin from "./components/user/Signin";
import Signup from "./components/user/Signup";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import ViewJobs from "./pages/ViewJobs";
import PostJob from "./pages/PostJob";
import ProtectedRoute from "./components/common/ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ],
  },
  {
    element: <Authlayout />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      }
    ],
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <UserProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/view-jobs",
    element: (
      <ProtectedRoute>
        <ViewJobs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/post-job",
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    ),
  },
])
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  if (!accessToken) {
    return <Navigate to="/signin" replace />;
  }

  return children;
  
};

export default ProtectedRoute;
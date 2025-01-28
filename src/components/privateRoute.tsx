import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }: PrivateRouteProps) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{element}</>;
};

export default PrivateRoute;

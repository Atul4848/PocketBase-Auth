import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  isPublic?: boolean;
}

const ProtectedRoute = ({ isPublic = false }: ProtectedRouteProps) => {
  const { user } = useAuth();

  // Logic for public routes (e.g., login, register)
  if (isPublic && user) {
    return <Navigate to="/dashboard" />;
  }

  // Logic for private routes (e.g., dashboard)
  if (!isPublic && !user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
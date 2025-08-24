import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Platform Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded-md font-bold hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 h-48 rounded-lg p-4"></div>
          <div className="bg-gray-200 h-48 rounded-lg p-4"></div>
          <div className="bg-gray-200 h-48 rounded-lg p-4"></div>
          <div className="bg-gray-200 h-48 rounded-lg p-4"></div>
          <div className="bg-gray-200 h-48 rounded-lg p-4"></div>
          <div className="bg-gray-200 h-48 rounded-lg p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
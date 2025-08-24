import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the App!</h1>
      <p className="text-lg text-gray-600 mb-8">
        {user ? (
          "You are currently logged in."
        ) : (
          "Please log in or create an account to continue."
        )}
      </p>
      {user ? (
        <div className="flex space-x-4">
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      ) : (
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
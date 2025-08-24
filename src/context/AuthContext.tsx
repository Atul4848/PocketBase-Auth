import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import PocketBase, { RecordModel } from 'pocketbase';

interface User extends RecordModel {
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: object) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const pb = new PocketBase('https://pb.devpgs.app');

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(
    pb.authStore.isValid ? (pb.authStore.model as User) : null
  );

  useEffect(() => {
    return pb.authStore.onChange((_token, model) => {
      setUser(model ? (model as User) : null);
    });
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      await pb.collection('users').authWithPassword(email, password);
      setUser(pb.authStore.model as User);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (userData: object): Promise<boolean> => {
    try {
      await pb.collection('users').create(userData);
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    pb.authStore.clear();
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

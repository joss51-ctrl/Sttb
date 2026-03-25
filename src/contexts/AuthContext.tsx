import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackendApiUrl } from '../functions/BackendApiUrl';
import { toast } from 'sonner';

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('accessToken'));
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // ✅ moved inside the component

  useEffect(() => {
    if (token) {
      fetchUserInfo(token);
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const fetchUserInfo = async (token: string) => {
    try {
      const res = await fetch(BackendApiUrl.me, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
      } else {
        localStorage.removeItem('accessToken');
        setToken(null);
      }
    } catch (error) {
      console.error('Failed to fetch user info', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch(BackendApiUrl.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const error = await res.json();
        toast.error(error.message || 'Login failed');
        return false;
      }
      const data = await res.json();
      const newToken = data.token;
      localStorage.setItem('accessToken', newToken);
      setToken(newToken);
      setUser(data.user);
      return true;
    } catch (error) {
      console.error('Login error', error);
      toast.error('Network error. Please try again.');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
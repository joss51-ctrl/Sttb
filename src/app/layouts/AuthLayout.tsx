import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';

export default function AuthLayout() {
  console.log("AuthLayout rendered");
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
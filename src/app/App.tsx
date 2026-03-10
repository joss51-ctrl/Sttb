import { RouterProvider } from 'react-router';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';

/**
 * Main App Component
 * Uses React Router for navigation between public website and CMS
 * 
 * Architecture:
 * - Public website: University pages with academic, clean design
 * - CMS: Enterprise-grade content management system
 * 
 * All routing configured in ./routes.ts following React Router Data mode pattern
 */
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  );
}

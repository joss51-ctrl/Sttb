import { Outlet } from 'react-router-dom';
import PublicHeader from '../components/public/PublicHeader';
import PublicFooter from '../components/public/PublicFooter';

/**
 * PublicLayout - Layout wrapper for public-facing website pages
 * Features sticky header, main content area, and comprehensive footer
 */
export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PublicHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}

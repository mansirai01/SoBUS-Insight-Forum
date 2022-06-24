import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/DashboardLayout';
import Blog from './pages/Blog';
import SearchContacts from './pages/SearchContacts';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import OuterLanding from './pages/OuterLanding';
import PlainLayout from './layouts/PlainLayout';
import InnerLanding from './pages/InnerLanding';
import CreateBiz from './pages/CreateBiz';
import AllBiz from './pages/AllBiz';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/app',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <InnerLanding /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'SearchContact', element: <SearchContacts /> },
        { path: 'blog', element: <Blog /> },
        { path: 'createbiz', element: <CreateBiz /> },
      ],
    },
    {
      path: '/',
      element: <PlainLayout />,
      children: [
        { path: '/', element: <OuterLanding /> },
        { path: 'blog', element: <Blog /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'smallbiz', element: <AllBiz /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

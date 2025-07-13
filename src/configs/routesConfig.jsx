import Upload from "../pages/Upload";
import ResumeAnaylze from "../pages/ResumeAnaylze";
import LandingPage from "../pages/LandingPage";
import ResumesList from "../pages/ResumesList";
import AdminDashboard from '../pages/AdminDashboard';
import LoginCallback from "../pages/LoginCallback";
import NavigatetoAuthX from "../pages/NavigateToAuthX";

import Unauthorized from '../pages/Unauthorized'
import NotFound from "../pages/NotFound";

const routes = [
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/login',
    element: <NavigatetoAuthX />

  },
  {
    path: "/upload",
    element: <Upload />,
    requiredAccess: ['Admin View', "User View"],
  },
  {
    path: "/resume-analyze",
    element: <ResumeAnaylze />,
    requiredAccess: ['Admin View', "User View"],
    // allowedPreviousPaths: ["/upload", "/admin"]
  },
  {
    path: "/home",
    element: <LandingPage />,
    requiredAccess: ['Admin View', "User View"],
  },
  {
    path: "/resumes-list",
    element: <ResumesList />,
    requiredAccess: ['Admin View', "User View"],
    // allowedPreviousPaths: ["/upload"]
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    requiredAccess: ['Admin View'],
  },
  {
    path: "/callback/login",
    element: <LoginCallback />
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;

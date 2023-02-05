import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Template from './Template';
import Users from './components/Users';
import Login from "./components/Login";
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import ManageTeam from './components/Team';
import Home from './components/Home';

// Settings - routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Template />,
    children: [
      {
        path: "welcome",
        element: <Home />
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "team",
        element: <ManageTeam />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },

    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

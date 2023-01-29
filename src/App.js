import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Template from './Template';
import Login from "./components/Login";
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';

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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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

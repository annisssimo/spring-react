import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import Projects from './pages/Projects/Projects';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { validateToken } from './utils/authUtils';

const router = createBrowserRouter([
  {
    element: <Projects />,
    path: '/',
    loader: async () => {
      const isValid = await validateToken();
      return isValid ? null : redirect('/login');
    },
  },
  {
    element: <Login />,
    path: '/login',
  },
  {
    element: <Signup />,
    path: '/signup',
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import Projects from './pages/Projects/Projects';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import store from './redux/store/store';

const router = createBrowserRouter([
  {
    element: <Projects />,
    path: '/',
    loader: () =>
      store.getState().user.isAuthenticated ? null : redirect('/login'),
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

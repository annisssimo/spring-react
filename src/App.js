import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';

import Projects from './pages/Projects/Projects';
import Login from './pages/Login/Login';
import store from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      element: <Projects />,
      path: '/',
      loader: async () => {
        const { isAuthenticated } = store.getState().user;
        if (!isAuthenticated) {
          return redirect('/login');
        }
        return null;
      },
    },
    {
      element: <Login />,
      path: '/login',
      loader: async () => {
        const { isAuthenticated } = store.getState().user;
        if (isAuthenticated) {
          return redirect('/');
        }
        return null;
      },
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { routes } from '../router/routes';
import Posts from '../pages/Posts';
import About from '../pages/About';
import Layout from '../components/Layout';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import RequireAuth from '../hoc/RequireAuth';
import { AuthProvider } from '../hoc/AuthProvider';

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'posts',
          element: <Posts />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'posts/:id',
          element: (
            <RequireAuth>
              <PostIdPage />
            </RequireAuth>
          ),
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
};

export default AppRouter;

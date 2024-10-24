import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './pages/main/Home';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { Mission } from './pages/mission/Mission.jsx';
import { Header } from './components/header/Header.jsx';
import { PostDetail } from './pages/postdetail/PostDetail.jsx';

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/mission',
          element: (
            <ProtectedRoute>
              <Mission />
            </ProtectedRoute>
          ),
        },
        {
          path: '/detail',
          element: <PostDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;

}

export default App;

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/main/Home';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { Header } from './components/header/Header.jsx';
//import { PostDetail } from './pages/postdetail/PostDetail.jsx';
import MissionPage from './pages/mission/MissionPage.jsx';
import MyPage from './pages/mypage/MyPage.jsx';

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
              <MissionPage />
            </ProtectedRoute>
          ),
        },
        // {
        //   path: '/detail',
        //   element: <PostDetail />,
        // },
        {
          path: '/mypage',
          element: <MyPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

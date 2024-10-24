import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import MissionPage from './pages/mission/MissionPage.jsx';
import { Header } from './components/header/Header.jsx';
import MainPage from './pages/main/MainPage.jsx';
import { PostDetail } from './pages/postdetail/PostDetail.jsx';
import MyPage from './pages/mypage/MyPage.jsx';
import { Auction } from './pages/auction/Auction.jsx';

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
          element: <MainPage />,
        },
        {
          path: '/mission',
          element: (
            <ProtectedRoute>
              <MissionPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/detail',
          element: <PostDetail />,
        },
        {
          path: '/mypage',
          element: <MyPage />,
        },
        {
          path: '/auction',
          element: (
            // <ProtectedRoute>
            <Auction />
            // </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

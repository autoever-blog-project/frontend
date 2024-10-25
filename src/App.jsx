import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { PuppyInfoRoute } from './components/PuppyInfoRoute.jsx';
import MissionPage from './pages/mission/MissionPage.jsx';
import { Header } from './components/header/Header.jsx';
import MainPage from './pages/main/MainPage.jsx';
import { PostDetail } from './pages/postdetail/PostDetail.jsx';
import MyPage from './pages/mypage/MyPage.jsx';
import SignUpPage from './pages/sign/SignUpPage.jsx'; // SignUpPage 추가

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
          element: (
            <PuppyInfoRoute>
              <MainPage />
            </PuppyInfoRoute>
          ),
        },
        {
          path: '/mission',
          element: (
            <ProtectedRoute>
              {/* <PuppyInfoRoute> */}
              <MissionPage />
              {/* </PuppyInfoRoute> */}
            </ProtectedRoute>
          ),
        },
        {
          path: '/detail',
          element: (
            <PuppyInfoRoute>
              <PostDetail />
            </PuppyInfoRoute>
          ),
        },
        {
          path: '/mypage',
          element: (
            <PuppyInfoRoute>
              <MyPage />
            </PuppyInfoRoute>
          ),
        },
        {
          path: '/signup',
          element: <SignUpPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

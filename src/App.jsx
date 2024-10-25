import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { PuppyInfoRoute } from './components/PuppyInfoRoute.jsx';
import MissionPage from './pages/mission/MissionPage.jsx';
import { Header } from './components/header/Header.jsx';
import MainPage from './pages/main/MainPage.jsx';
import PostPage from './pages/post/PostPage.jsx';
import WritePage from './pages/write/WritePage.jsx';
// import { PostDetail } from './pages/postdetail/PostDetail.jsx';
import { PostDetail } from './pages/postdetail/PostDetail.jsx';
import MyPage from './pages/mypage/MyPage.jsx';
import { Auction } from './pages/auction/Auction.jsx';
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
          element: <MissionPage />,
        },
        { path: '/post', element: <PostPage /> },
        { path: '/write', element: <WritePage defaultPage={null} /> },
        // {
        //   path: '/detail',
        //   element: <PostDetail />,
        // },

        // {
        //   path: '/mypage',
        //   element: <MyPage />,
        // },
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
          path: '/detail/:postId',
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

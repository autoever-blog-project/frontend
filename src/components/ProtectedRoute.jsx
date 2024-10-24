import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  return !!token;
};

export const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    alert('로그인을 하세요');
    return <Navigate to="/" replace />;
  }
  return children;
};

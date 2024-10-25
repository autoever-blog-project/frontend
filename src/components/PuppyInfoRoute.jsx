import React from 'react';
import { Navigate } from 'react-router-dom';

export const PuppyInfoRoute = ({ children }) => {
  const puppyInfo = localStorage.getItem('puppy_info'); // 강아지 정보 가져오기

  if (!puppyInfo) {
    // 정보가 없으면 강아지 등록 페이지로 이동
    return <Navigate to="/signup" />;
  }

  return children; // 정보가 있으면 페이지 렌더링
};

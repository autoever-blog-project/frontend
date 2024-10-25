import { useState, useEffect } from 'react';
import * as S from './Header.style';
import Logo from '@/assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { authenticated } from '@/api/axiosInstance';

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 페이지 경로 확인
  const isCurrentPath = (path) => {
    return location.pathname === '/' + path;
  };

  // 페이지 이동
  const handleMovePageClick = (path) => {
    navigate(path);
  };

  // 카카오 로그인 클릭 처리
  const handleLoginClick = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=d8fabac493f22b719a1bc4f29b44c9d1&redirect_uri=http://localhost:8080/login/oauth/kakao`;
  };

  // 로그아웃 클릭 처리
  const handleLogoutClick = () => {
    // TODO: 로그아웃 API 연동
    localStorage.removeItem('actk');
    localStorage.removeItem('rftk');
    setIsLogin(false);
  };

  // URL에서 토큰 추출 및 상태 업데이트
  useEffect(() => {
    const fetchGetUserInfo = async () => {
      const params = new URLSearchParams(location.search);
      const accessToken = params.get('accessToken');
      const refreshToken = params.get('refreshToken');

      if (accessToken && refreshToken) {
        localStorage.setItem('actk', accessToken);
        localStorage.setItem('rftk', refreshToken);
        setIsLogin(true); // 로그인 상태 업데이트

        const response = await authenticated.post('/login/oauth/kakao', {
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
        localStorage.setItem('member_id', response.data.member_id);
        navigate('/'); // 로그인 후 홈으로 이동
      }
    };

    fetchGetUserInfo();
  }, [location.search, navigate]);

  useEffect(() => {
    const accessToken = localStorage.getItem('actk');
    const refreshToken = localStorage.getItem('rftk');

    if (accessToken && refreshToken) {
      setIsLogin(true); // 로그인 상태 업데이트
    }
  }, []);

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderLogo src={Logo} onClick={() => handleMovePageClick('/')}></S.HeaderLogo>
        <S.MenuWrapper>
          <S.MenuButton $active={isCurrentPath('post')} onClick={() => handleMovePageClick('post')}>
            POST
          </S.MenuButton>
          <S.MenuButton $active={isCurrentPath('mission')} onClick={() => handleMovePageClick('mission')}>
            미션
          </S.MenuButton>
          <S.MenuButton $active={isCurrentPath('auction')} onClick={() => handleMovePageClick('auction')}>
            경매
          </S.MenuButton>
          {isLogin ? (
            <>
              <S.MenuProfile onClick={() => handleMovePageClick('mypage')}>
                <S.MenuProfileImg src="https://i.ibb.co/1QzR2ZN/seolyoon.jpg"></S.MenuProfileImg>
              </S.MenuProfile>
              <S.MenuLogin onClick={handleLogoutClick}>로그아웃</S.MenuLogin>
            </>
          ) : (
            <S.MenuLogin onClick={handleLoginClick}>로그인</S.MenuLogin>
          )}
        </S.MenuWrapper>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

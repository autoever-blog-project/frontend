import { useState } from 'react';
import * as S from './Header.style';
import Logo from '@/assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentPath = (path) => {
    return location.pathname === '/' + path;
  };

  // TODO: 토큰 확인 후 로그인 되어 있는 경우와 없는 경우로 처리
  const handleMovePageClick = (path) => {
    navigate(path);
  };

  const handleLoginClick = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=72ca8d5c3abeee717446fc97a3749656&redirect_uri=http://localhost:8080/login/oauth/kakao`;

    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      localStorage.setItem('actk', accessToken);
      localStorage.setItem('rftk', refreshToken);

      setIsLogin(true);
      window.location.href = 'http://localhost:5173/';
    }
  };

  const handleLogoutClick = () => {
    // TODO: 로그아웃 API 연동
  };

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

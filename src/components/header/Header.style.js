import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.lightGreen};
  display: flex;
  align-items: center;
  z-index: 9999;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
`;

export const HeaderLogo = styled.img`
  display: flex;
  align-items: center;
  width: 80px;
  height: 60px;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const MenuButton = styled.button`
  display: flex;
  border: none;
  background: none;
  padding: 4px 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  ${({ $active }) =>
    $active &&
    css`
      border-bottom: 2px solid white;
      color: white;
    `}

  &:hover {
    transform: translateY(-3px);
    color: white;
  }
`;

export const MenuProfile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 0.2px solid grey;
  border-radius: 5rem;
  padding: 0;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
  /* background: ${({ img_url }) => css`
    url(${img_url}) lightgray 50% / cover no-repeat;
  `}; */
`;

export const MenuProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5rem;
  object-fit: cover;
`;

export const MenuLogin = styled.button`
  display: flex;
  border: none;
  margin: 0 10px;
  background: ${theme.colors.mainBlue};
  width: 80px;
  height: 40px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    color: white;
  }
`;

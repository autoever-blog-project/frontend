import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 370px;
`;

export const ProfileContent = styled.div`
  width: 600px;
  height: 370px;
  display: flex;
  gap: 50px;
`;

export const ProfileImageWrapper = styled.div`
  width: 370px;
  height: 370px;
  border-radius: 100%;

  img {
    width: 370px;
    height: 370px;
    padding: 5px;
    border-radius: 100%;
  }
`;

export const ProfileTextWrapper = styled.div`
  margin: auto 0;
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 10px;
  }
`;

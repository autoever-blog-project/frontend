import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 370px;
  display: flex;
  margin-bottom: 30px;
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

export const ProfileMenuWrapper = styled.div`
  width: calc(100% - 600px);
  height: 370px;
  display: flex;
  justify-content: end;

  button {
    width: 80px;
    height: 25px;
    align-self: end;
    background-color: red;
    border: none;
    border-radius: 5px;
  }
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const TebmenuWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  margin-bottom: 20px;
`;

export const TebmenuButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.isSelected ? '#fff' : '#f9f9f9')};
  border: ${(props) => (props.isSelected ? '' : '3px solid #B8B8B8')};
  border-top: ${(props) => (props.isSelected ? '3px solid #B8B8B8' : '')};
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
  }
`;

export const TebContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`;

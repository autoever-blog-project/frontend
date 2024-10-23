import styled from 'styled-components';

export const MyPagePostList = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
`;

export const MyPagePostCard = styled.div`
  width: 100%;
  height: 300px;
`;

export const CardContentsWrapper = styled.div`
  width: 700px;
  height: 100%;
`;

export const CardProfileWrapper = styled.div`
  width: 180px;
  height: 40px;

  img {
    width: 40px;
    border-radius: 100%;
  }
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

export const CardTitleWrapper = styled.div`
  width: 700px;
  height: 100%;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 120px;
  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
  }
`;

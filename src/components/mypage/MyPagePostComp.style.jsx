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
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const CardContentsWrapper = styled.div`
  width: 700px;
  height: 100%;
`;

export const CardProfileWrapper = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: calc(4px);
  img {
    width: 40px;
    height: 40px;
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
  margin-bottom: 5px;
`;

export const CardTitleWrapper = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  gap: calc(5px);
  margin-bottom: 20px;
  img {
    align-items: center;
    width: 30px;
    height: 30px;
  }
  p {
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    word-break: break-all;
    line-height: 1.6;
  }
`;

export const CardImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  img {
    width: 250px;
    height: 250px;
  }
`;

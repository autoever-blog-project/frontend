import styled from 'styled-components';

export const MissionContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  :hover {
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const MissionContents = styled.div`
  margin: auto;
  width: 75%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;

  img {
    width: 300px;
    height: 300px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.5;
  color: black;
`;

export const SubTitleText = styled.div`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: black;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
`;

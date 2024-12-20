import styled from 'styled-components';

export const MissionContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
  margin-top: 80px;
`;

export const MissionOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  :hover {
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
  gap: 20px;
`;

export const ImageContainer = styled.div`
  /* margin-bottom: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
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
  font-size: 30px;
  line-height: 1.5;
  margin-bottom: 10px;
  color: black;
`;

export const HistoryContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CalenderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

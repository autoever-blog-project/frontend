import styled from 'styled-components';

export const MissionContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
`;

export const MissionContents = styled.div`
  margin: auto;
  width: 75%;
  height: 500px;
  background-color: ${({ isDueDay }) => isDueDay ? 'yellow' : 'blue'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;
  
  img {
    width: 350px;
    height: 350px;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.5;
  color: black;
`;

import React from 'react';
import styled from 'styled-components';
import dog1 from '@/assets/dog1.jpg';
import dog2 from '@/assets/dog2.jpg';
import dog3 from '@/assets/dog3.jpg';
import dog4 from '@/assets/dog4.jpg';
import dog5 from '@/assets/dog5.jpg';
import dog6 from '@/assets/dog6.jpg';

function MissionModalComp({ onClose, missionDate, missionUrl }) {
  const handleClose = () => {
    onClose?.(false);
  };
  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <h1>{missionDate}일의 추억이에요.</h1>
          <img src={missionUrl} />
          <Button onClick={handleClose}>닫기</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  height: 500px;
  border-radius: 15px;
  background-color: #cfffe5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

const Contents = styled.div`
  margin: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }
  img {
    width: 300px;
    height: 320px;
  }
`;
const Button = styled.button`
  font-size: 15px;
  padding: 10px 20px;
  width: 300px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  /* font-style: italic; */
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default MissionModalComp;

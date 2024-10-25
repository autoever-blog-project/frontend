import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchTodoWrite } from '@/api/detail'; // fetchTodoWrite 경로를 수정하세요

function MyPageModalComp({ onClose, eventList, selectDay, handleRefresh }) {
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const formatted = parseInt(selectDay.substr(8, 2));
    setSelectedDate(formatted);
  }, [selectDay]); // Dependency array 추가

  const handleClose = () => {
    onClose(false);
  };

  const handleAddEvent = async () => {
    console.log(`Adding event: ${newEvent}`);

    const data = {
      title: 'aaa',
      content: newEvent,
      memberId: localStorage.getItem('member_id'),
      dueDate: selectDay,
      status: false,
    };

    try {
      await fetchTodoWrite(data);
      console.log('Event added successfully');
      setNewEvent('');
      handleRefresh();
      handleClose();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <h1>{selectedDate}일에 할일</h1>
          {eventList && eventList.length > 0 ? (
            <EventList>
              {eventList.map((event, index) => (
                <EventTextWrapper key={index}>
                  <p>{event.title}</p>
                </EventTextWrapper>
              ))}
            </EventList>
          ) : (
            <EventList>
              <p>일정을 추가해 보세요!</p>
            </EventList>
          )}
          <InputContainer>
            <input
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="일정을 입력하세요"
            />
            <Button onClick={handleAddEvent}>추가</Button>
          </InputContainer>
          <Button onClick={handleClose}>Close</Button>
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
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 50px 30px;
  height: 400px;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const EventList = styled.div`
  height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;

  p {
    width: 100%;
    margin: 5px 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background-color: #898989;
  }
`;

const EventTextWrapper = styled.div`
  width: 100%;
  height: 25px;
  background-color: pink;
  font-weight: 500;
  display: flex;
  margin-bottom: 5px;
`;

export default MyPageModalComp;

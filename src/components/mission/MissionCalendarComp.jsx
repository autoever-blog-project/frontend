import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import temp from '@/assets/bath.svg';
import MissionModalComp from './MissionModalComp';
import './MissionCalendarComp.css';

function MissionCalendarComp({ refresh }) {
  //TODO : axios get으로 eventsArray 채워주기 + 파일업로드 될때마다 여기로 props 내려줘서 새로고침해주기. /Line:21~
  const [eventsArray, setEventsArray] = useState([
    {
      title: '목욕시키기',
      start: '2024-10-21',
      allDay: true,
      imageurl: temp,
    },
  ]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null); //모달에 props로 내려줌
  const [eventsOnSelectedDate, setEventsOnSelectedDate] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    // TODO : setEventsArray(API 미션리스트 get)
    console.log('eventsArray update');
  }, [refresh]);

  useEffect(() => {
    console.log(eventsOnSelectedDate);
  }, [eventsOnSelectedDate]);

  const [selectEventDay, setSelectEventDay] = useState('');

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    setSelectedImageUrl(info.event.url);
    console.log(info.event.extendedProps.imageurl);
    const eventDate = new Date(info.event.start);
    const formatted = eventDate.getDate(); // 상태 업데이트 전에 직접 값 사용
    console.log(formatted);
    setSelectEventDay(formatted);
    //TODO : 클릭시 모달 구현, url 이미지와, '날짜' 의 미션 추억하기 같은 문구 넣기
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(!isModal);
  };

  const eventDidMount = (info) => {
    console.log(info.event.extendedProps);
    console.log(info.el);
    if (info.event.extendedProps.imageurl) {
      const img = document.createElement('img');
      img.src = info.event.extendedProps.imageurl;
      img.style.width = '100%'; // 원하는 크기로 조정
      img.style.height = '80px'; // 비율 유지
      img.style.borderRadius = '5px'; // 모서리 둥글게 설정 (선택 사항)

      info.el.appendChild(img); // 이미지 삽입
    }
  };

  return (
    <div id="calendar1">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={eventsArray}
        // dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDidMount={eventDidMount}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        customButtons={{ today: { text: '오늘' } }}
        showNonCurrentDates={false}
        height="auto"
      />
      {isModal && <MissionModalComp onClose={closeModal} missionUrl={temp} missionDate={selectEventDay} />}
    </div>
  );
}

export default MissionCalendarComp;

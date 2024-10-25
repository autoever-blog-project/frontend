import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import temp from '@/assets/bath.svg';
import MissionModalComp from './MissionModalComp';
import './MissionCalendarComp.css';
import { fetchMissionList } from '../../api/detail';
import dog1 from '@/assets/dog1.jpg';
import dog2 from '@/assets/dog2.jpg';
import dog3 from '@/assets/dog3.jpg';
import dog4 from '@/assets/dog4.jpg';
import dog5 from '@/assets/dog5.jpg';
import dog6 from '@/assets/dog6.jpg';

function MissionCalendarComp({ refresh }) {
  //TODO : axios get으로 eventsArray 채워주기 + 파일업로드 될때마다 여기로 props 내려줘서 새로고침해주기. /Line:21~
  const [eventsArray, setEventsArray] = useState([
    {
      title: '목욕시키고',
      start: '2024-10-20',
      allDay: true,
      imageurl: dog1,
    },
    {
      title: '산책하고',
      start: '2024-10-21',
      allDay: true,
      imageurl: dog2,
    },
    {
      title: '여행가기',
      start: '2024-10-22',
      allDay: true,
      imageurl: dog3,
    },
    {
      title: '낮잠재우기',
      start: '2024-10-23',
      allDay: true,
      imageurl: dog4,
    },
    {
      title: '생일파티하고',
      start: '2024-10-24',
      allDay: true,
      imageurl: dog5,
    },
    {
      title: '발 닦아주고',
      start: '2024-10-25',
      allDay: true,
      imageurl: dog6,
    },
  ]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null); //모달에 props로 내려줌
  const [eventsOnSelectedDate, setEventsOnSelectedDate] = useState([]);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const missionList = await fetchMissionList(); // 여러 개의 항목을 가져옴

        const events = missionList.data.map((item) => ({
          title: item.content,
          start: item.missionDate,
          allDay: true,
          //imageurl : //이미지아이디값으로 엑시오스해서 url받아오기
        })); // 각 항목에서 필요한 속성만 추출
        setEventsArray(events); // 추출한 데이터를 상태에 설정
      } catch (error) {
        console.error('Error list event:', error);
      }

      fetchData();
      console.log('eventsArray update');
    };
  }, [refresh]);

  useEffect(() => {
    console.log(eventsOnSelectedDate);
  }, [eventsOnSelectedDate]);

  const [selectEventDay, setSelectEventDay] = useState('');

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    -console.log(info.event.extendedProps.imageurl);
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
      setSelectedImageUrl(img.src);
      img.style.width = '130px'; // 원하는 크기로 조정
      img.style.height = '80px'; // 비율 유지
      img.style.borderRadius = '5px'; // 모서리 둥글게 설정 (선택 사항)

      info.el.appendChild(img); // 이미지 삽입
    }
  };

  const handleDayCellContent = (arg) => {
    const dayNumber = arg.dayNumberText.replace('일', '');
    return dayNumber;
  };

  return (
    <div id="calendar1">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={eventsArray}
        // dateClick={handleDateClick}
        eventClick={handleEventClick}
        dayCellContent={handleDayCellContent}
        eventDidMount={eventDidMount}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        customButtons={{ today: { text: '오늘' } }}
        showNonCurrentDates={false}
        height="auto"
        locale="ko"
      />
      {isModal && <MissionModalComp onClose={closeModal} missionUrl={dog6} missionDate={selectEventDay} />}
    </div>
  );
}

export default MissionCalendarComp;

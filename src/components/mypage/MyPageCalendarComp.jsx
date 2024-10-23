import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MyPageModalComp from './MyPageModalComp';

function MyPageCalendarComp() {
  const [eventsArray, setEventsArray] = useState([
    {
      title: '예방접종하기',
      start: '2024-10-23',
      allDay: true,
      extendedProps: {
        status: false,
      },
    },
  ]);
  const [isModal, setIsModal] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [selectEventDay, setSelectEventDay] = useState('');
  const addImageEvent = (event) => {
    console.log(event);

    const newEvent = {
      title: event.title,
      start: event.date,
      allDay: true,
    };
    setEventsArray((prevEvents) => [...prevEvents, newEvent]);
    console.log('newEvent create');

    console.log(newEvent);
  };

  const handleDateClick = (info) => {
    const selectedDate = info.dateStr;

    const eventsOnSelectedDate = eventsArray.filter((event) => {
      return event.start === selectedDate;
    });
    setEventList(eventsOnSelectedDate);
    const formatted = parseInt(selectedDate.substr(8, 2));
    setSelectEventDay(formatted);
    setIsModal(true);
  };
  useEffect(() => {
    // setEventsArray()
  }, [eventsArray]);

  const handleEventClick = (arg) => {
    arg.jsEvent.preventDefault();
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div id="calendar2">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]} // 플러그인 설정
        events={eventsArray} // 캘린더에 표시할 이벤트 데이터를 정의합니다.
        dateClick={handleDateClick} // 날짜를 클릭했을 때 실행할 콜백 함수를 정의합니다.
        eventClick={handleEventClick} // 이벤트를 클릭했을 때 실행할 콜백 함수를 정의합니다.
        editable={true} // 이벤트의 드래그 앤 드롭, 리사이징, 이동을 허용합니다.
        droppable={true} // 캘린더에 요소를 드롭하여 이벤트를 생성할 수 있도록 허용합니다.
        //selectable={true} // 사용자가 일정 범위를 선택하여 이벤트를 추가할 수 있도록 허용합니다.
        //selectMirror={true} // 이벤트를 추가할 때 선택한 영역을 표시합니다.
        eventBackgroundColor="#ff0000" // 이벤트의 배경색을 설정합니다.
        eventBorderColor="#ff0000" // 이벤트의 테두리 색을 설정합니다.
        //allDay={true} // 이벤트가 하루 종일인지 여부를 지정합니다.
        timeZone="UTC" // 캘린더의 시간대를 UTC로 설정합니다.
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
      />
      {isModal && <MyPageModalComp onClose={closeModal} eventList={eventList} selectDay={selectEventDay} />}
    </div>
  );
}

export default MyPageCalendarComp;

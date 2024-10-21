import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function CalendarComp() {
  const [eventsArray, setEventsArray] = useState([
    {
      title: '목욕시키기',
      start: '2024-10-21',
      allDay: true,
      imageurl: './stemp.jpg',
    },
  ]);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [eventsOnSelectedDate, setEventsOnSelectedDate] = useState([]);

  const addImageEvent = (imageData) => {
    console.log(imageData);

    const newEvent = {
      title: imageData.title,
      start: imageData.date,
      allDay: true,
      url: imageData.file_path,
    };
    setEventsArray((prevEvents) => [...prevEvents, newEvent]);
    console.log('newEvent create');

    console.log(newEvent);
  };

  const handleDateClick = (info) => {
    const selectedDate = info.dateStr;

    setEventsOnSelectedDate(
      eventsArray.filter((event) => {
        return event.start === selectedDate;
      })
    );
  };
  useEffect(() => {
    console.log(eventsOnSelectedDate);
  }, [eventsOnSelectedDate]);

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    setSelectedImageUrl(info.event.url);
    console.log(info);
  };

  const closeModal = () => {
    setSelectedImageUrl(null); // 모달 닫기
  };

  const eventDidMount = (info) => {
    console.log(info.event.extendedProps);
    console.log(info.el);
    if (info.event.extendedProps.imageurl) {
      const img = document.createElement('img');
      img.src = info.event.extendedProps.imageurl;
      img.style.width = '100%'; // 원하는 크기로 조정
      img.style.height = 'auto'; // 비율 유지
      img.style.borderRadius = '5px'; // 모서리 둥글게 설정 (선택 사항)

      info.el.appendChild(img); // 이미지 삽입
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={eventsArray}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDidMount={eventDidMount}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
      />
    </div>
  );
}

export default CalendarComp;

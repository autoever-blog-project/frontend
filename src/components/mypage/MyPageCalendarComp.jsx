import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import MyPageModalComp from './MyPageModalComp';
import { fetchTodoList } from '../../api/detail';

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
    {
      title: '생일축하해주기',
      start: '2024-10-23',
      allDay: true,
      extendedProps: {
        status: false,
      },
    },
  ]);
  const [refresh, setRefresh] = useState(false);
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

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleDateClick = (info) => {
    const selectedDate = info.dateStr;

    const eventsOnSelectedDate = eventsArray.filter((event) => {
      return event.start === selectedDate;
    });
    setEventList(eventsOnSelectedDate);
    setSelectEventDay(selectedDate);
    setIsModal(true);
  };
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);

    const fetchData = async () => {
      try {
        const todoList = await fetchTodoList(); // 여러 개의 항목을 가져옴
        const isDueToday = todoList.data.some((item) => item.dueDate === today);
        if (isDueToday) {
          localStorage.setItem('isDueDay', 'true');
        }
        const events = todoList.data.map((item) => ({
          title: item.content,
          start: item.dueDate,
          allDay: true,
          extendedProps: {
            status: item.status,
          },
        })); // 각 항목에서 필요한 속성만 추출

        setEventsArray(events); // 추출한 데이터를 상태에 설정
      } catch (error) {
        console.error('Error list event:', error);
      }
    };

    fetchData();
    console.log(eventsArray);
  }, [refresh]);

  const handleEventClick = (arg) => {
    arg.jsEvent.preventDefault();
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleDayCellContent = (arg) => {
    const dayNumber = arg.dayNumberText.replace('일', '');
    return dayNumber;
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
        dayCellContent={handleDayCellContent}
        //allDay={true} // 이벤트가 하루 종일인지 여부를 지정합니다.
        timeZone="UTC" // 캘린더의 시간대를 UTC로 설정합니다.
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        locale="ko"
        customButtons={{ today: { text: '오늘' } }}
        showNonCurrentDates={false}
      />
      {isModal && (
        <MyPageModalComp
          onClose={closeModal}
          eventList={eventList}
          selectDay={selectEventDay}
          handleRefresh={handleRefresh}
        />
      )}
    </div>
  );
}

export default MyPageCalendarComp;

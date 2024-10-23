import React, { useState, useEffect, useRef } from 'react';
import { MissionContainer, MissionContents, ImageContainer, TextContainer, SubTitleText } from './MissionPage.style';
import MissionCalendarComp from '@/components/mission/MissionCalendarComp';
import bathImage from '@/assets/bath.svg';
import axios from 'axios';

//강아지와 주인 개인미션에 넣을사진

//예정일이 없을때 랜덤 미션 리스트
const missions = [
  { mission: '목욕 시키고', imageUrl: bathImage },
  { mission: '산책 하고', imageUrl: bathImage },
  { mission: '발 닦아주고', imageUrl: bathImage },
];

function MissionPage() {
  const [todayMission, setTodayMission] = useState(null);
  const [currentDay, setCurrentDay] = useState(new Date().toDateString());
  const [refresh, setRefresh] = useState(false);
  //setIsDueDay 는 todo도메인 due_date 값이 currentDay으로 필터해서 length가 있으면 true 가 되는 구조 생각중/ 백 로직보고 결정
  const [isDueDay, setIsDueDay] = useState(false);
  //파일업로드 후 캘린더 리프레쉬용
  const [isUploaded, setIsUploaded] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const fileInputRef = useRef(null);

  const checkDueDay = () => {
    setCurrentDay(new Date().toDateString());

    //TODO : axios get todo list, setTodoList에 넣어둠
    //setIsDueDay(todoList.filter((event) => {
    //  return event.start === selectedDate;
    //});
  };

  //매일 미션이 갱신되야하므로 날짜, 미션을 로컬스토리지에 저장해두고 day가 다르다면 새로 미션 받는다.
  const loadOrSetMission = () => {
    const savedData = JSON.parse(localStorage.getItem('missionData'));
    const savedDay = savedData?.date;

    if (savedDay === currentDay) {
      setTodayMission(savedData.mission);
      return;
    }

    setIsComplete(false);

    let selected = '';

    // TODO 미션인날
    if (isDueDay) {
      //axios로 받아온 todoList[0].contents
    } else {
      const randomIndex = Math.floor(Math.random() * missions.length);
      selected = missions[randomIndex];
      //setTodayMission(selectedMission);
    }
    const missionData = {
      date: currentDay,
      mission: selected,
    };
    localStorage.setItem('missionData', JSON.stringify(missionData));
    handleRefresh();
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        // const response = await axios.post('/api/upload', formData, {
        //   headers: { 'Content-Type': 'multipart/form-data' },
        // });  API 코드 (미션 db에 보내기, member_id, status, mission_date)
        //

        setIsUploaded(!isUploaded);
      } catch (error) {
        console.error('이미지 업로드 중 오류 발생:', error);
      }
    }
  };

  const handleContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // input 파일 선택창 열기
    }
  };

  useEffect(() => {
    // const fetchTodoList = async () => {
    //   try {
    //     const response = await axios.get('YOUR_API_URL_HERE');
    //     setTodoList(response.data);
    //
    //     response.data.due_date와 currentDay를 비교하는 로직 후 true false받음

    //     setIsDueDay(hasDueToday);
    //   } catch (error) {
    //     console.error('Error fetching todo list:', error);
    //   }
    // };

    // fetchTodoList();

    loadOrSetMission();
  }, [refresh]);

  return (
    <>
      <MissionContainer onClick={handleContainerClick}>
        <MissionContents>
          {isDueDay
            ? todayMission && ( // 개인미션일때는 고정 이미지url , 강아지와 주인이 의욕에 불타는사진
                <>
                  <ImageContainer>
                    <img src={todayMission.imageUrl} alt={todayMission.mission} />
                  </ImageContainer>
                  <TextContainer>
                    <p>오늘의 미션</p>
                    <p>{todayMission.mission}!</p>
                  </TextContainer>
                </>
              )
            : todayMission && (
                <>
                  <ImageContainer>
                    <img src={todayMission.imageUrl} alt={todayMission.mission} />
                  </ImageContainer>
                  <TextContainer>
                    <p>오늘의 미션</p>
                    <p>{todayMission.mission} 인증하기!</p>
                  </TextContainer>
                </>
              )}
        </MissionContents>
      </MissionContainer>
      <SubTitleText>
        <p>미션 히스토리</p>
      </SubTitleText>
      <MissionCalendarComp refresh={isUploaded} />
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} />
    </>
  );
}

export default MissionPage;

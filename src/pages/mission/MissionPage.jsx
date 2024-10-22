import React, { useState, useEffect, useRef } from 'react';
import { MissionContainer, MissionContents, ImageContainer, TextContainer, SubTitleText } from './MissionPage.style';
import MissionCalendarComp from '@/components/calendar/MissionCalendarComp';
import bathImage from '@/assets/bath.svg';
import axios from 'axios';

//예정일이 없을때 랜덤 미션 리스트
const missions = [
  { mission: '목욕 시키고', imageUrl: bathImage },
  { mission: '산책 하고', imageUrl: bathImage },
  { mission: '발 닦아주고', imageUrl: bathImage },
];

function MissionPage() {
  const [randomMission, setRandomMission] = useState(null);
  const [currentDay, setCurrentDay] = useState(new Date().toDateString());
  const [refresh, setRefresh] = useState(false);
  //setIsDueDay 는 todo도메인 due_date 값이 currentDay으로 필터해서 length가 있으면 true 가 되는 구조 생각중/ 백 로직보고 결정
  const [isDueDay, setIsDueDay] = useState(false);
  //파일업로드 후 캘린더 리프레쉬용
  const [isUploaded, setIsUploaded] = useState(false);

  const fileInputRef = useRef(null);

  //매일 미션이 갱신되야하므로 날짜, 미션을 로컬스토리지에 저장해두고 day가 다르다면 새로 미션 받는다.
  const loadOrSetMission = () => {
    const savedData = JSON.parse(localStorage.getItem('missionData'));
    const savedDay = savedData?.date;
    setCurrentDay(new Date().toDateString());

    if (savedDay === currentDay) {
      setRandomMission(savedData.mission);
    } else {
      const randomIndex = Math.floor(Math.random() * missions.length);
      const selectedMission = missions[randomIndex];
      setRandomMission(selectedMission);

      const missionData = {
        date: currentDay,
        mission: selectedMission,
      };
      localStorage.setItem('missionData', JSON.stringify(missionData));
      handleRefresh();
    }
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
    loadOrSetMission();
  }, [refresh]);

  return (
    <>
      <MissionContainer onClick={handleContainerClick}>
        <MissionContents>
          {isDueDay
            ? null //개인이벤트 상징할만한 사진 필요,
            : randomMission && (
                <>
                  <ImageContainer>
                    <img src={randomMission.imageUrl} alt={randomMission.mission} />
                  </ImageContainer>
                  <TextContainer>
                    <p>오늘의 미션</p>
                    <p>{randomMission.mission} 인증하기!</p>
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

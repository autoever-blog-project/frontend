import React, { useState, useEffect, useRef } from 'react';
import {
  MissionContainer,
  MissionContents,
  ImageContainer,
  TextContainer,
  SubTitleText,
  HistoryContainer,
  CalenderContainer,
} from './MissionPage.style';
import MissionCalendarComp from '@/components/mission/MissionCalendarComp';
import bathImage from '@/assets/bath.svg';
import axios from 'axios';
import missionComplete from '@/assets/missioncomplete.png';
import { fetchMissionWrite, fetchTodoList } from '../../api/detail';
import * as WP from '@/pages/write/WritePageStyle.js';
import plusIcon from '@/assets/PlusIcon.svg';
import tkscor from '@/assets/tkscor.jpg';
import footimage from '@/assets/footimage.jpg';
import duedatejpg from '@/assets/duedateevent.jpg';
import { useStore } from '../../components/store/point';
import confetti from 'canvas-confetti';
import { showPointIncreaseEffect } from '../../animation/animation';

//예정일이 없을때 랜덤 미션 리스트
const missions = [
  { mission: '목욕 시키고', imageUrl: bathImage },
  { mission: '산책 하고', imageUrl: tkscor },
  { mission: '발 닦아주고', imageUrl: footimage },
];

function MissionPage() {
  const { point, inc } = useStore();
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

  useEffect(() => {
    localStorage.getItem('complete_day') === new Date().toDateString() ? setIsComplete(true) : null;
  }, []);

  useEffect(() => {
    setCurrentDay(new Date().toDateString());
  });

  //매일 미션이 갱신되야하므로 날짜, 미션을 로컬스토리지에 저장해두고 day가 다르다면 새로 미션 받는다.
  const loadOrSetMission = () => {
    const savedData = JSON.parse(localStorage.getItem('missionData'));
    const savedDay = savedData?.date;

    if (savedDay === currentDay) {
      setTodayMission(savedData.mission);
      return;
    }
    console.log(savedDay);
    console.log(currentDay);

    setIsComplete(false);

    let selected = '';

    // TODO 미션인날
    if (localStorage.getItem('isDueDay') !== null && localStorage.getItem('missionData') === null) {
      const today = new Date().toISOString().slice(0, 10);

      const fetchData = async () => {
        try {
          const todoList = await fetchTodoList();
          console.log(todoList);

          const dueTodayContent = todoList.data.find((item) => item.dueDate === today)?.content || null;
          console.log('오늘 마감일인 첫 번째 항목의 content:', dueTodayContent);

          const missionData = {
            date: new Date().toDateString(),
            mission: { mission: dueTodayContent, imageUrl: duedatejpg },
          };

          setTodayMission(JSON.stringify(missionData));
          localStorage.setItem('missionData', JSON.stringify(missionData));
        } catch (error) {
          console.error('Error fetching todo list:', error);
        }
        fetchData();
      };
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

  const handleComplete = () => {
    setIsComplete(true);
    inc(1000);
    showPointIncreaseEffect(1000);
    firework();
    localStorage.setItem('complete_day', new Date().toDateString());
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('memberId', Number(localStorage.getItem('member_id')));
      formData.append('missionDate', new Date().toDateString());
      // for (const key in data) {
      //   formData.append(key, data[key]);
      // }
      // for (const [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      try {
        // await fetchMissionWrite(formData);

        setIsUploaded(!isUploaded);
        handleComplete();
      } catch (error) {
        console.error('이미지 업로드 중 오류 발생:', error);
      }
    }
  };

  const handleContainerClick = () => {
    if (isComplete) return;
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
      <MissionContainer>
        {/* <MissionOverlay /> */}
        <MissionContents>
          {isComplete ? (
            <>
              <ImageContainer>
                <img src={missionComplete} />
              </ImageContainer>
              <TextContainer>
                <p>오늘의 미션</p>
                <p>완료!!!!</p>
              </TextContainer>
            </>
          ) : todayMission && isDueDay ? (
            todayMission && (
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
          ) : (
            todayMission && (
              <>
                <WP.WritePageImgSubmitContainer>
                  <WP.WritePageImageInput
                    id="inputImg"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileUpload}
                    // onChange={imgUploadHandler}
                    // ref={imgRef}
                  />
                  <WP.WritePageImageInputOverlay />
                  {/* <img src={plusIcon} style={{ width: 40 }} alt="plus icon" /> */}
                  <img src={todayMission.imageUrl} alt={todayMission.mission} style={{ width: '95%', height: '95%' }} />
                </WP.WritePageImgSubmitContainer>
                {/* 
                <ImageContainer onClick={handleContainerClick}>
                  <img src={todayMission.imageUrl} alt={todayMission.mission} />
                </ImageContainer> */}
                <TextContainer>
                  <p>오늘의 미션</p>
                  <p>{todayMission.mission} 인증하기!</p>
                </TextContainer>
                {/* <ImageContainer>
                  <img src={todayMission.imageUrl} alt={todayMission.mission} />
                </ImageContainer>
                <TextContainer>
                  <p>오늘의 미션</p>
                  <p>{todayMission.mission} 인증하기!</p>
                </TextContainer> */}
              </>
            )
          )}
        </MissionContents>
      </MissionContainer>

      <HistoryContainer>
        <SubTitleText>
          <p>미션 히스토리</p>
        </SubTitleText>
        <CalenderContainer>
          <MissionCalendarComp refresh={isUploaded} />
        </CalenderContainer>
      </HistoryContainer>
      {/* <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileUpload} /> */}
    </>
  );
}

export function firework() {
  var duration = 15 * 100;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };
  //  startVelocity: 범위, spread: 방향, ticks: 갯수

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

export default MissionPage;

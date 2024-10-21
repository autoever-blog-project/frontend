import React, { useState, useEffect } from 'react';
import { MissionContainer, MissionContents, ImageContainer, TextContainer } from './MissionPage.style';
import MissionCalendarComp from '@/components/calendar/MissionCalendarComp';
import bathImage from '@/assets/bath.svg'

const missions = [
  { mission: '목욕 시키고', imageUrl: bathImage }
];

function MissionPage() {
  const [isDueDay, setIsDueDay] = useState(false); 
  const [randomMission, setRandomMission] = useState(null); 

  useEffect(() => {
    if (!isDueDay) {
      const randomIndex = Math.floor(Math.random() * missions.length);
      setRandomMission(missions[randomIndex]);
    }
  }, [isDueDay]);

  return (
    <>
      <MissionContainer>
        <MissionContents isDueDay={isDueDay}>
          {isDueDay ? (
            <TextContainer>
              <p>오늘의 미션</p>
            </TextContainer>
          ) : (
            randomMission && ( 
              <>
                <ImageContainer>
                  <img src={randomMission.imageUrl} alt={randomMission.mission} />
                </ImageContainer>
                <TextContainer>
                  <p>오늘의 미션</p>
                  <p>{randomMission.mission} 인증하기!</p>
                </TextContainer>
              </>
            )
          )}
        </MissionContents>
      </MissionContainer>
      <MissionCalendarComp />
    </>
  );
}

export default MissionPage;

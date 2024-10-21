import React from 'react';
import { MissionContainer, MissionContents } from './MissionPage.style';
import CalendarComp from '../../components/calendar/CalendarComp';

function MissionPage() {
  return (
    <>
      <MissionContainer>
        <MissionContents></MissionContents>
      </MissionContainer>
      <CalendarComp />
    </>
  );
}

export default MissionPage;

import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentsContainer,
  ProfileContainer,
  ProfileContent,
  ProfileImageWrapper,
  ProfileMenuWrapper,
  ProfileTextWrapper,
  TebContentsWrapper,
  TebmenuButton,
  TebmenuWrapper,
} from './MyPage.style';
import temp from '@/assets/dogprofile.jpg';
import MyPageCalendarComp from '../../components/mypage/MyPageCalendarComp';
import MyPagePostComp from '../../components/mypage/MyPagePostComp';

//TODO : puppy 데이터 init하기

function MyPage() {
  const [puppyData, setPuppyData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const TabData = [
    { id: 0, button: '내 글 보기' },
    { id: 1, button: '일정 보기' },
  ];

  useEffect(() => {}, []);

  const handleTebButton = (i) => setActiveTab(i);

  return (
    <>
      <Container>
        <ProfileContainer>
          <ProfileContent>
            <ProfileImageWrapper>
              <img src={temp} />
            </ProfileImageWrapper>
            <ProfileTextWrapper>
              <h1>김퍼피</h1>
              <p>3세</p>
              <p>20.10.20</p>
            </ProfileTextWrapper>
          </ProfileContent>
          <ProfileMenuWrapper>
            <button>탈퇴하기</button>
          </ProfileMenuWrapper>
        </ProfileContainer>
        <ContentsContainer>
          <TebmenuWrapper>
            {TabData.map((tab) => (
              <TebmenuButton
                key={tab.id}
                onClick={() => {
                  handleTebButton(tab.id);
                }}
                isSelected={activeTab === tab.id}
              >
                <p>{tab.button}</p>
              </TebmenuButton>
            ))}
          </TebmenuWrapper>
          <TebContentsWrapper>{activeTab === 0 ? <MyPagePostComp /> : <MyPageCalendarComp />}</TebContentsWrapper>
        </ContentsContainer>
      </Container>
    </>
  );
}

export default MyPage;

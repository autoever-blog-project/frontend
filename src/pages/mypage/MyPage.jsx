import React, { useEffect, useState } from 'react';
import {
  Container,
  ContentsContainer,
  ProfileContainer,
  ProfileContent,
  ProfileImageWrapper,
  ProfileGraphWrapper,
  ProfileTextWrapper,
  TebContentsWrapper,
  TebmenuButton,
  TebmenuWrapper,
  MemberDeleteButton,
  ProfileGraphTitle,
} from './MyPage.style';
import temp from '@/assets/dogprofile.jpg';
import MyPageCalendarComp from '../../components/mypage/MyPageCalendarComp';
import MyPagePostComp from '../../components/mypage/MyPagePostComp';
import MyPageGraghComp from '../../components/mypage/MyPageGraghComp';

//TODO : puppy 데이터 init하기

function MyPage() {
  const [puppyData, setPuppyData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const TabData = [
    { id: 0, button: '내 글 보기' },
    { id: 1, button: '일정 보기' },
  ];
  //id : puppy.name  data{x : puppy_weight.uploadDate , y : puppy_weight.weight}

  const [graghData, setGraghData] = useState([
    {
      id: '모아',
      color: 'hsl(281, 70%, 50%)',
      data: [
        {
          x: '2024-09-12',
          y: 190,
        },
        {
          x: '2024-09-13',
          y: 74,
        },
        {
          x: '2024-09-14',
          y: 263,
        },
        {
          x: '2024-09-15',
          y: 22,
        },
        {
          x: '2024-09-16',
          y: 236,
        },
      ],
    },
  ]);

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
          <ProfileGraphWrapper>
            <MyPageGraghComp data={graghData} />
          </ProfileGraphWrapper>
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
        <MemberDeleteButton>탈퇴하기</MemberDeleteButton>
      </Container>
    </>
  );
}

export default MyPage;

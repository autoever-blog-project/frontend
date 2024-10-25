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
import { fetchPuppyList } from '../../api/detail';

//TODO : puppy 데이터 init하기

function MyPage() {
  const [puppyData, setPuppyData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [age, setAge] = useState(0);
  const TabData = [
    { id: 0, button: '내 글 보기' },
    { id: 1, button: '일정 보기' },
  ];
  //id : puppy.name  data{x : puppy_weight.uploadDate , y : puppy_weight.weight}

  const [graghData, setGraghData] = useState([
    {
      id: '체중 변화',
      color: 'hsl(281, 70%, 50%)',
      data: [
        {
          x: '2024-09-12',
          y: 3.2,
        },
        {
          x: '2024-09-13',
          y: 3.4,
        },
        {
          x: '2024-09-14',
          y: 3.3,
        },
        {
          x: '2024-09-15',
          y: 3.5,
        },
        {
          x: '2024-09-16',
          y: 3.6,
        },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPuppyList();
        console.log(data);
        setPuppyData(data.data);
      } catch (e) {
        console.error('puppy data event: ', e);
      }
    };

    fetchData();
  }, []);

  const handleTebButton = (i) => setActiveTab(i);

  const getAge = (date) => {
    // date = "2024-02-02"
    const year = parseInt(date);
    console.log();
    const age = 2025 - year;
    return age;
  };

  return (
    <>
      <Container>
        <ProfileContainer>
          <ProfileContent>
            <ProfileImageWrapper>
              <img src={localStorage.getItem('member_profile')} />
            </ProfileImageWrapper>
            <ProfileTextWrapper>
              <h1>{puppyData.name}</h1>
              <p>{getAge(puppyData.birth)}살</p>
              <p>{puppyData.birth}</p>
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
                $isSelected={activeTab === tab.id}
              >
                <p>{tab.button}</p>
              </TebmenuButton>
            ))}
          </TebmenuWrapper>
          <TebContentsWrapper>{activeTab === 0 ? <MyPagePostComp /> : <MyPageCalendarComp />}</TebContentsWrapper>
        </ContentsContainer>
        {/* <MemberDeleteButton>탈퇴하기</MemberDeleteButton> */}
      </Container>
    </>
  );
}

export default MyPage;

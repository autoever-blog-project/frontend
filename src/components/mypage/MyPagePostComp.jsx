import React, { useEffect, useState } from 'react';
import {
  CardContent,
  CardContentsWrapper,
  CardImageWrapper,
  CardProfileWrapper,
  CardTitleWrapper,
  MyPagePostCard,
  MyPagePostList,
} from './MyPagePostComp.style';
import tmp from '@/assets/dogprofile.jpg';
// import { fetchPostGetAll } from '../../api/detail';
import emoji from '@/assets/emoji _slightly frowning face.svg';
import dog1 from '@/assets/dog1.jpg';
import dog2 from '@/assets/dog2.jpg';
import dog3 from '@/assets/dog3.jpg';
import dog4 from '@/assets/dog4.jpg';
import dog5 from '@/assets/dog5.jpg';
import dog6 from '@/assets/dog6.jpg';

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

function MyPagePostComp() {
  const [data, setData] = useState(initState);
  const EMOJI = { happy: '😃', unhappy: '🙃', laugh: '🤣' };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchPostGetAll();
  //       setData(response.data);
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleClickCard = (index) => {
    //디테일페이지로 (index의 페이지)
  };

  return (
    <>
      <MyPagePostList>
        {/* {data.dtoList.map((item, i) => {
          return (
            <MyPagePostCard
              key={i}
              onClick={() => {
                handleClickCard(i);
              }}
            >
              <CardContentsWrapper>
                <CardProfileWrapper>
                  <img src={item.profile_image}></img>
                  <h2>{item.nickname}</h2>
                  <p>{item.post_date}</p>
                </CardProfileWrapper>
                <CardTitleWrapper>
                  <img src={item.emoji}></img>
                  <p>{item.title}</p>
                </CardTitleWrapper>
                <CardContent>
                  <p>{item.content}</p>
                </CardContent>
              </CardContentsWrapper>
              <CardImageWrapper>
                <img src={item.img}></img>
              </CardImageWrapper>
            </MyPagePostCard>
          );
        })} */}
        <MyPagePostCard>
          <CardContentsWrapper>
            <CardProfileWrapper>
              <img src={localStorage.getItem('member_profile')}></img>
              <h2>송지웅</h2>
              <p>24-10-23</p>
            </CardProfileWrapper>
            <CardTitleWrapper>
              <img src={emoji}></img>
              <p>프로필 사진 찍은 날 이에요</p>
            </CardTitleWrapper>
            <CardContent>
              <p>
                프로필사진을 찍으러 갔어요 강아지가 정말 이쁘게 나왔죠 ?? 서로 이웃해서 좋은 사진 공유해요 다음에 또
                포스팅하겠습니다.
              </p>
            </CardContent>
          </CardContentsWrapper>
          <CardImageWrapper>
            <img src={tmp}></img>
          </CardImageWrapper>
        </MyPagePostCard>
        <MyPagePostCard>
          <CardContentsWrapper>
            <CardProfileWrapper>
              <img src={localStorage.getItem('member_profile')}></img>
              <h2>송지웅</h2>
              <p>24-10-22</p>
            </CardProfileWrapper>
            <CardTitleWrapper>
              <img src={emoji}></img>
              <p>강아지랑 산책 가던날</p>
            </CardTitleWrapper>
            <CardContent>
              <p>
                강아지랑 산책을 갔어요 .. 그런데 바닥에 위험한 쓰레기들이 너무 많아 속상했습니다. 우리모두 윤리의식을
                깨우쳐보는 것은 어떨까요 ?? 다음에 또 포스팅하겠습니다.
              </p>
            </CardContent>
          </CardContentsWrapper>
          <CardImageWrapper>
            <img src={dog4}></img>
          </CardImageWrapper>
        </MyPagePostCard>
        <MyPagePostCard>
          <CardContentsWrapper>
            <CardProfileWrapper>
              <img src={localStorage.getItem('member_profile')}></img>
              <h2>송지웅</h2>
              <p>24-10-25</p>
            </CardProfileWrapper>
            <CardTitleWrapper>
              <img src={emoji}></img>
              <p>오늘은 반려견과 여행을 갔어요</p>
            </CardTitleWrapper>
            <CardContent>
              <p>
                반려견과 함께하는 여행은 너무 행복한 일이에요. 반려견도 너무 신나서 방방 뛰어다니곤 했습니다. 다음에 또
                포스팅 하겠습니다.
              </p>
            </CardContent>
          </CardContentsWrapper>
          <CardImageWrapper>
            <img src={dog2}></img>
          </CardImageWrapper>
        </MyPagePostCard>
      </MyPagePostList>
    </>
  );
}

export default MyPagePostComp;

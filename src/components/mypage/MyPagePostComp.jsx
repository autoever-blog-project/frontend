import React, { useState } from 'react';
import {
  CardContent,
  CardContentsWrapper,
  CardImageWrapper,
  CardProfileWrapper,
  CardTitleWrapper,
  MyPagePostCard,
  MyPagePostList,
} from './MyPagePostComp.style';
import tmp from '@/assets/dogprofile.jpg'

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
          <img src={tmp}></img>
          <h2>홀란드</h2>
          <p>24-10-23</p>
          </CardProfileWrapper>
          <CardTitleWrapper>
            <img src={tmp}></img>
            <p>프로필 사진 찍은 날 이에요</p>
          </CardTitleWrapper>
          <CardContent>
            <p>프로필사진을찍어버려썽요프로필사진을찍어버렸어용프로필사진을찍어버렸어용프로필사진을찍어버려썽요프로필사진을찍어버렸어용프로필사진을찍어버렸어용프로필사진을찍어버려썽요프로필사진을찍어버렸어용프로필사진을찍어버렸어용프로필사진을찍어버려썽요프로필사진을찍프로필사진을찍어버려썽요프로필사진을찍어버렸어용프로필사진을찍어버렸어용어버렸어용프로필사진을찍어버렸어용프로필사진을찍어버려썽요프로필사진을찍어버렸어용프로필사진을찍어버렸어용</p>
          </CardContent>
        </CardContentsWrapper>
        <CardImageWrapper>
          <img src={tmp}></img>
        </CardImageWrapper>
        </MyPagePostCard>
      </MyPagePostList>
    </>
  );
}

export default MyPagePostComp;

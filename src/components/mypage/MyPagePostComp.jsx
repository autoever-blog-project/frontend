import React, { useState } from 'react';
import {
  CardContent,
  CardContentsWrapper,
  CardProfileWrapper,
  CardTitleWrapper,
  MyPagePostCard,
  MyPagePostList,
} from './MyPagePostComp.style';

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
        {data.dtoList.map((item, i) => {
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
                <CardContent></CardContent>
              </CardContentsWrapper>
            </MyPagePostCard>
          );
        })}
      </MyPagePostList>
    </>
  );
}

export default MyPagePostComp;

import * as S from './MainPageStyle.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import PostCard from '@/components/PostCard/PostCard';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';

function MainPage() {
  //dummyData
  const postInfo = {
    title: 'qwiTw',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam tempora magni dolorum doloremque placeat, incidunt culpa et natus excepturi rem dolorem modi distinctio amet nihil odit? Consequatur, itaque repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam tempora magni dolorum doloremque placeat, incidunt culpa et natus excepturi rem dolorem modi distinctio amet nihil odit? Consequatur, itaque repellendus?',
    post_date: new Date(),
    img: '@/assets/0.png',
    tag: '강아지 마트',
    emoji: '@/assets/hashtag.png',
    like_heart: 1000,
  };
  const member = {
    nickname: '송지웅',
  };
  //게시글 정보 리스트
  const postInfos = new Array(6).fill(postInfo);
  return (
    <div>
      <S.MainViewBodyContainer>
        <SearchBar />
        <S.SwiperSliderContainer>
          <S.SwiperSliderContainerTitle>좋아요 많이 받은 게시글</S.SwiperSliderContainerTitle>
          <S.SwiperSliderPostContainer>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              navigation={true}
              centeredSlides={true}
              // loopAdditionalSlides={3}
              pagination={{
                type: 'fraction',
              }}
            >
              {postInfos.map((item, index) => (
                <SwiperSlide key={index} style={{ width: '300px' }}>
                  <PostCard postInfo={item} member={member}></PostCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.SwiperSliderPostContainer>
        </S.SwiperSliderContainer>
        <S.SwiperSliderContainer>
          <S.SwiperSliderContainerTitle>최신 게시글</S.SwiperSliderContainerTitle>
          <S.SwiperSliderPostContainer>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              navigation={true}
              pagination={{
                type: 'fraction',
              }}
            >
              {postInfos.map((item, index) => (
                <SwiperSlide key={index} style={{ width: '300px' }}>
                  <PostCard postInfo={item} member={member}></PostCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.SwiperSliderPostContainer>
        </S.SwiperSliderContainer>
      </S.MainViewBodyContainer>
    </div>
  );
}

export default MainPage;

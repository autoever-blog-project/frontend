import * as S from './MainPageStyle.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import PostCard from '@/components/PostCard/PostCard';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { fetchPostGetAll } from '../../api/detail.js';

function MainPage() {
  const [postInfo, setPostInfo] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postList = await fetchPostGetAll();
        setPostInfo(postList);
        console.log(postList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
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

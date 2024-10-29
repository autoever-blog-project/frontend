import * as S from './MainPageStyle.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import PostCard from '@/components/PostCard/PostCard';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import { useEffect, useState } from 'react';
import { fetchPostGetByParam } from '../../api/detail.js';

function MainPage() {
  const [postInfo, setPostInfo] = useState([]);
  const [recentInfo, setRecentInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //좋아요순
        const postList = await fetchPostGetByParam('likes', 1);
        setPostInfo(postList.data.dtoList);
        //최신순
        const recentList = await fetchPostGetByParam('latest', 1);
        setRecentInfo(recentList.data.dtoList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {postInfo == null ? (
        <></>
      ) : (
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
                {postInfo.map((item, index) => (
                  <SwiperSlide key={index} style={{ width: '300px' }}>
                    <PostCard postInfo={item}></PostCard>
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
                centeredSlides={true}
                pagination={{
                  type: 'fraction',
                }}
              >
                {recentInfo.map((item, index) => (
                  <SwiperSlide key={index} style={{ width: '300px' }}>
                    <PostCard postInfo={item}></PostCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.SwiperSliderPostContainer>
          </S.SwiperSliderContainer>
        </S.MainViewBodyContainer>
      )}
    </div>
  );
}

export default MainPage;

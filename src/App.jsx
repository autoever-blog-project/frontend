import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import PostCard from './components/PostCard/PostCard';

const SwiperContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  //
  const postInfo = {
    title: 'qweqw',
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

  return (
    <div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        <PostCard postInfo={postInfo} member={member}></PostCard>
        <SwiperContainer>
          <Swiper spaceBetween={50} slidesPerView={3} loop={true}>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </SwiperContainer>
      </div>
    </div>
  );
}

export default App;

import styled from 'styled-components';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
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
        <SearchBar />
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

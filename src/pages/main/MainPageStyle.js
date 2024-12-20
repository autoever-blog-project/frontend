import styled from 'styled-components';

export const MainViewBodyContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

//MainViewBodyContainer 구성요소

export const SwiperSliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

//SwiperSliderContainer 구성요소 (제목)

export const SwiperSliderContainerTitle = styled.p`
  width: 100%;
  text-align: start;
  font-weight: 700;
  font-size: 30px;
`;

export const SwiperSliderPostContainer = styled.div`
  width: 100%;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: black;
    left: 0px;
    cursor: pointer;
  }
  .swiper-button-next {
    color: black;
    right: -2px;
    cursor: pointer;
  }
`;

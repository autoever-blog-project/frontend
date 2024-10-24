import Countdown, { zeroPad } from 'react-countdown';
import * as S from './Auction.style';

export const Auction = () => {
  const todayMidnight = new Date(new Date().setHours(24, 0, 0, 0)).getTime();
  const leftTime = todayMidnight - Date.now();
  return (
    <S.ActionWrapper>
      <S.Title>오늘의 상품</S.Title>
      <Countdown date={Date.now() + leftTime} renderer={renderer} zeroPadTime={2} />
    </S.ActionWrapper>
  );
};

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <S.TimerWrapper>
      <S.SubTitle>🕒 남은 시간</S.SubTitle>
      <S.Timer>
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </S.Timer>
    </S.TimerWrapper>
  );
};

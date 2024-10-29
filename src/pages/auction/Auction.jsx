import Countdown, { zeroPad } from 'react-countdown';
import gift from '@/assets/petclothes.jpeg';
import * as S from './Auction.style';
import { useState } from 'react';
import { useStore } from '../../components/store/point';

export const Auction = () => {
  const [inputPrice, setInputPrice] = useState(0);
  const [joinerList, setJoinerList] = useState([
    { name: '카리나', price: 15000 },
    { name: '지젤', price: 13000 },
    { name: '닝닝', price: 11500 },
    { name: '윈터', price: 11000 },
  ]);
  const { point, dec } = useStore();

  const RANKLIST = ['🥇', '🥈', '🥉', '🤦🏻‍♀️', '🤦🏻'];

  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  const handleJoinClick = () => {
    const myPoint = localStorage.getItem('point');
    if (point < parseInt(inputPrice)) return;

    const name = localStorage.getItem('member_name');
    const newList = [...joinerList, { name, price: parseInt(inputPrice) }].sort((a, b) => b.price - a.price);
    dec(parseInt(inputPrice));
    setJoinerList(newList);
    setInputPrice(0);
  };

  const todayMidnight = new Date(new Date().setHours(24, 0, 0, 0)).getTime();
  const leftTime = todayMidnight - Date.now();
  return (
    <S.AuctionWrapper>
      <S.GiftInfoWrapper>
        <S.GiftInfo>
          <S.Title>오늘의 상품</S.Title>
          <S.SubTitle>강아지 옷(소형견)</S.SubTitle>
          <Countdown date={Date.now() + leftTime} renderer={renderer} zeroPadTime={2} />
        </S.GiftInfo>
        <S.Img src={gift}></S.Img>
      </S.GiftInfoWrapper>

      <S.RankWrapper>
        <S.RankTitle>입찰 현황</S.RankTitle>
      </S.RankWrapper>

      <S.JoinerWrapper>
        {joinerList.map((joiner, idx) => (
          <S.JoinerInfo key={joiner.name}>
            <S.JoinerRank>{RANKLIST[idx]}</S.JoinerRank>
            <S.JoinerName>{joiner.name}</S.JoinerName>
            <S.JoinerAmount>{joiner.price}원</S.JoinerAmount>
          </S.JoinerInfo>
        ))}
      </S.JoinerWrapper>

      <S.JoinWrapper>
        <S.JoinInputWrapper>
          <S.JoinInput value={inputPrice} onChange={handlePriceChange} />
          <S.Unit>원</S.Unit>
        </S.JoinInputWrapper>
        <S.JoinButton onClick={handleJoinClick}>입찰하기</S.JoinButton>
      </S.JoinWrapper>
    </S.AuctionWrapper>
  );
};

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <S.TimerWrapper>
      <S.LeftTime>🕒 남은 시간</S.LeftTime>
      <S.Timer>
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </S.Timer>
    </S.TimerWrapper>
  );
};

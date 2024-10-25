import { styled } from 'styled-components';
import { EditPostButton } from '../postdetail/PostDetail.style';

export const AuctionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  gap: 40px;
  padding-top: 120px;
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const GiftInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const GiftInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const LeftTime = styled.h2`
  font-size: 18px;
`;

export const Timer = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5rem;
  object-fit: cover;
`;

export const JoinWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const JoinButton = styled(EditPostButton)``;

export const RankWrapper = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

export const JoinerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const JoinerInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 280px;
`;

export const JoinerRank = styled.div`
  font-size: 18px;
`;

export const JoinerName = styled.div`
  font-size: 20px;
  width: 100px;
`;

export const JoinerAmount = styled.div`
  font-size: 20px;
`;

export const JoinInput = styled.input`
  width: 160px;
  height: 40px;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.colors.bgBlue};
  border-radius: 10px;
  text-align: right;
  padding: 2px 8px;
`;

export const JoinInputWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Unit = styled.div`
  font-size: 18px;
  padding-top: 4px;
`;

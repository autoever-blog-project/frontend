import styled from 'styled-components';

export const PostCardContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
`;

//PostCard 구성요소

export const PostCardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PostCardBodyContainer = styled.div`
  width: (100%-10px);
  height: 155px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 5px;
  position: relative;
`;

export const PostCardFooterContainer = styled.div`
  width: (100%-20px);
  height: (45) px;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  /* padding-bottom: 15px; */
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;

//PostCardBody 구성요소

export const PostCardEmoji = styled.img`
  width: 16px;
  height: 16px;
`;

export const PostCardTag = styled.p`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
`;

export const PostCardTitle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 800;
  font-size: 16px;
  height: 18px;
`;

export const PostCardBodyP = styled.p`
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  -webkit-line-clamp: 6;
`;

export const PostCardBodyDateAndCmt = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 5px;
`;

//PostCardFooter 구성요소

export const PostCardOwnerProfileImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
`;

export const PostCardTotalHeart = styled.img`
  width: 100%;
  height: 100%;
`;

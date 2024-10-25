import styled from 'styled-components';

export const PostCardContainer = styled.div`
  width: 300px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover .overlay {
    opacity: 0.5;
  }
  &:active .overlay {
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &:hover {
    transform: scale(0.99);
    opacity: 0.9;
  }
  &:active {
    opacity: 0.5;
  }
`;

//PostCard 구성요소

export const PostCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: 'opacity 0.3s ease';
`;

export const PostCardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const PostCardBodyContainer = styled.div`
  width: (100%-10px);
  height: 100px;
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
  padding-left: 5px;
  padding-right: 5px;
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
  -webkit-line-clamp: 2;
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
  border-radius: 50%;
`;

export const PostCardTotalHeart = styled.img`
  width: 100%;
  height: 100%;
`;

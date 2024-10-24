import styled from 'styled-components';
import { CommnetWrite } from './Comment.style';

export const PostDetailWrapper = styled.div`
  margin-top: 80px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  width: 1024px;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

export const HashTagWrapper = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
  width: 1024px;
  height: 100%;
  align-items: center;
`;

export const HashTag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.hashTag};
  box-sizing: border-box;
  background: none;
  padding: 2px 8px;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    /* outline: 1px solid ${({ theme }) => theme.colors.hashTag}; */
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const ImageWrapper = styled.div`
  width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 40px 0;
`;

export const Image = styled.img`
  width: 90%;
  height: 100%;
`;

export const Content = styled.div`
  border: none;
  width: 1024px;
  white-space: pre-wrap;
  line-height: 2;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const LikedWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 40px 0;
`;

export const LikedImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  & > :first-child:hover {
    transform: scale(0.95);
    filter: drop-shadow(5px 5px 5px rgba(139, 0, 0, 0.5));
  }
`;

export const LikedCount = styled.span`
  font-size: 12px;
`;

export const EditWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditPostButton = styled(CommnetWrite)``;

export const DeletePostButton = styled(CommnetWrite)`
  background: ${({ theme }) => theme.colors.deleteRed};

  &:hover {
    background: #ff7b6a;
  }
`;

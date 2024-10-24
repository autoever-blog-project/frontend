import styled from 'styled-components';
import { MenuProfileImg } from '@/components/header/Header.style';

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  margin-top: 20px;
  gap: 10px;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const CommentTitle = styled.div`
  font-size: 30px;
  width: 1024px;
  font-weight: bold;
`;

export const CommentTextBox = styled.textarea`
  width: 1000px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  box-sizing: border-box;
  resize: none;
  line-height: 2;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.bgBlue};
  }
`;

export const CommnetWrite = styled.button`
  width: 100px;
  height: 40px;
  background: ${({ theme }) => theme.colors.bgBlue};
  color: white;
  align-self: flex-end;
  border: 0;
  margin: 0 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #b0c1ef;
  }
`;

export const CommentItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > :first-child {
    border: 0;
  }
`;

export const CommentItem = styled.div`
  width: 1024px;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 28px 20px;
  box-sizing: border-box;
`;

export const CommentWriter = styled.div`
  width: 160px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CommentWriterImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 0.2px solid grey;
  border-radius: 5rem;
  padding: 0;
`;

export const CommentWriterImage = styled(MenuProfileImg)``;

export const CommentNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CommentName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const CommentDate = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const CommentContent = styled.div`
  width: 1024;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

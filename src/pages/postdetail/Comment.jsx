import { useState } from 'react';
import * as S from './Comment.style';
import { authenticated } from '@/api/axiosInstance';

export const Comment = () => {
  const [commentText, setCommentText] = useState();

  const comments = [
    {
      comment: '너도 좀 치는구나?',
      userName: '카리나',
      date: '2024-10-23',
      userImage: 'https://i.ibb.co/1QzR2ZN/seolyoon.jpg',
    },
    {
      comment: '여신이다 여신이다!',
      userName: '설윤',
      date: '2024-10-11',
      userImage: 'https://i.ibb.co/1QzR2ZN/seolyoon.jpg',
    },
  ];

  const handleCommentWriteSubmit = (e) => {
    // TODO: 댓글등록 기능 API 연동
    authenticated.post('', 'data');
    e.preventDefault();
  };

  const handleCommentWriteChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <S.CommentWrapper>
      <S.CommentForm onSubmit={handleCommentWriteSubmit}>
        <S.CommentTitle>댓글 {comments.length}개</S.CommentTitle>
        <S.CommentTextBox placeholder="댓글을 작성하세요" onChange={handleCommentWriteChange} />
        <S.CommnetWrite type="submit">댓글 작성</S.CommnetWrite>
      </S.CommentForm>

      <S.CommentItemWrapper>
        {comments.map((commentInfo, idx) => (
          <S.CommentItem key={idx}>
            <S.CommentWriter>
              <S.CommentWriterImageWrapper>
                <S.CommentWriterImage src={commentInfo.userImage} />
              </S.CommentWriterImageWrapper>
              <S.CommentNameWrapper>
                <S.CommentName>{commentInfo.userName}</S.CommentName>
                <S.CommentDate>{commentInfo.date}</S.CommentDate>
              </S.CommentNameWrapper>
            </S.CommentWriter>

            <S.CommentContent>{commentInfo.comment}</S.CommentContent>
          </S.CommentItem>
        ))}
      </S.CommentItemWrapper>
    </S.CommentWrapper>
  );
};

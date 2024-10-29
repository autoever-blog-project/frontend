import { useState } from 'react';
import * as S from './Comment.style';
import { fetchCommentWrite } from '@/api/detail';
import { useQueryClient } from '@tanstack/react-query';

export const Comment = ({ comments, postId }) => {
  const [commentText, setCommentText] = useState();
  const queryClient = useQueryClient();

  const handleCommentWriteSubmit = async (e) => {
    e.preventDefault();
    await fetchCommentWrite(postId, { content: commentText, memberId: localStorage.getItem('member_id'), postId });
    queryClient.invalidateQueries(['postDetail', postId]);
    setCommentText('');
  };

  const handleCommentWriteChange = (e) => {
    setCommentText(e.target.value);
  };
  return (
    <S.CommentWrapper>
      <S.CommentForm onSubmit={handleCommentWriteSubmit}>
        <S.CommentTitle>댓글 {comments.length}개</S.CommentTitle>
        <S.CommentTextBox placeholder="댓글을 작성하세요" onChange={handleCommentWriteChange} value={commentText} />
        <S.CommnetWrite type="submit">댓글 작성</S.CommnetWrite>
      </S.CommentForm>

      <S.CommentItemWrapper>
        {comments.map((commentInfo, idx) => (
          <S.CommentItem key={idx}>
            <S.CommentWriter>
              <S.CommentNameWrapper>
                <S.CommentName>{commentInfo.memberName}</S.CommentName>
                <S.CommentDate>{commentInfo.commentDate}</S.CommentDate>
              </S.CommentNameWrapper>
            </S.CommentWriter>

            <S.CommentContent>{commentInfo.content}</S.CommentContent>
          </S.CommentItem>
        ))}
      </S.CommentItemWrapper>
    </S.CommentWrapper>
  );
};

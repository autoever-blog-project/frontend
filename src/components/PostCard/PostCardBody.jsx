/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import * as S from './PostCardStyle.js';
import emoji from '@/assets/emoji _slightly frowning face.svg';

//Emoji 경로 수정
function PostCardBody({ postInfo }) {
  const postTags = postInfo.tags.map((item) => `#${item.name}  `);
  return (
    <div>
      <S.PostCardBodyContainer>
        <div style={{ display: 'flex', gap: 10 }}>
          <S.PostCardEmoji src={emoji} />
          <S.PostCardTag>{postTags}</S.PostCardTag>
        </div>
        <S.PostCardTitle>{postInfo.title}</S.PostCardTitle>
        <S.PostCardBodyP> {postInfo.content} </S.PostCardBodyP>
        <S.PostCardBodyDateAndCmt>
          {postInfo.postDate} / {postInfo.comments.length}개의 댓글
        </S.PostCardBodyDateAndCmt>
      </S.PostCardBodyContainer>
    </div>
  );
}

export default PostCardBody;

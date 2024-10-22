/* eslint-disable react/prop-types */
import * as S from './PostCardStyle.js';
import emoji from '@/assets/emoji _slightly frowning face.svg';
function PostCardBody({ postInfo }) {
  const postTags = postInfo.tag.split(' ').map((item) => `#${item}  `);
  return (
    <div>
      <S.PostCardBodyContainer>
        <div style={{ display: 'flex', gap: 10 }}>
          <S.PostCardEmoji src={emoji} />
          <S.PostCardTag>{postTags}</S.PostCardTag>
        </div>
        <S.PostCardTitle>{postInfo.title}</S.PostCardTitle>
        <S.PostCardBodyP> {postInfo.content} </S.PostCardBodyP>
        <S.PostCardBodyDateAndCmt>{postInfo.post_date.getDate()} / 7개의 댓글</S.PostCardBodyDateAndCmt>
      </S.PostCardBodyContainer>
    </div>
  );
}

export default PostCardBody;

/* eslint-disable react/prop-types */
import * as S from './PostCardStyle.js';
function PostCardBody({ postInfo }) {
  const postTags = postInfo.tag.split(' ').map((item) => `#${item}  `);
  return (
    <div>
      <S.PostCardBodyContainer>
        <div>
          <S.PostCardEmoji src={postInfo.emoji} />
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

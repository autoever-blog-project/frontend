/* eslint-disable react/prop-types */
import PostCardBody from './PostCardBody.jsx';
import PostCardFooter from './PostCardFooter.jsx';
import * as S from './PostCardStyle.js';

function PostCard({ postInfo, member }) {
  return (
    <div>
      <S.PostCardContainer>
        <S.PostCardImg src={postInfo.img} />
        <PostCardBody postInfo={postInfo} />
        <PostCardFooter postInfo={postInfo} member={member} />
      </S.PostCardContainer>
    </div>
  );
}

export default PostCard;

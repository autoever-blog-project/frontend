/* eslint-disable react/prop-types */
import PostCardBody from './PostCardBody.jsx';
import PostCardFooter from './PostCardFooter.jsx';
import * as S from './PostCardStyle.js';
import image from '@/assets/0.png';

//Img 경로 수정
function PostCard({ postInfo }) {
  return (
    //detailView로 이동
    <div onClick={() => {}}>
      <S.PostCardContainer>
        <S.PostCardOverlay className="overlay" />
        <S.PostCardImg src={image} />
        <PostCardBody postInfo={postInfo} />
        <PostCardFooter postInfo={postInfo} />
      </S.PostCardContainer>
    </div>
  );
}

export default PostCard;

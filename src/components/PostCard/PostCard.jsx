/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import PostCardBody from './PostCardBody.jsx';
import PostCardFooter from './PostCardFooter.jsx';
import * as S from './PostCardStyle.js';
import image from '@/assets/0.png';

//Img 경로 수정
function PostCard({ postInfo }) {
  const navigate = useNavigate();

  const handlePostCardClick = () => {
    navigate(`/detail/${postInfo.postId}`);
  };
  return (
    //detailView로 이동
    <div onClick={handlePostCardClick}>
      <S.PostCardContainer>
        <S.PostCardOverlay className="overlay" />
        <S.PostCardImg src={`/src/assets/dog${postInfo.postId}.jpg`} />
        <PostCardBody postInfo={postInfo} />
        <PostCardFooter postInfo={postInfo} />
      </S.PostCardContainer>
    </div>
  );
}

export default PostCard;

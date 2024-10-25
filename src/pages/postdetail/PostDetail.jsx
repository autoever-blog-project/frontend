import { Comment } from './Comment';
import * as S from './PostDetail.style';
import Liked from '@/assets/liked.svg?react';
import { useLikedMutation } from '@/hooks/usePostDetailQuery';
import { useState } from 'react';
import { fetchPostDelete } from '@/api/detail';
import { usePostDetailInfo } from '@/hooks/usePostDetailQuery';
import WritePage from '../write/WritePage';
import { useNavigate, useParams } from 'react-router-dom';

export const PostDetail = () => {
  const { postId } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const data = usePostDetailInfo(postId);
  const { mutate, isPending } = useLikedMutation(postId);
  const navigate = useNavigate();

  const EMOJI = { happy: '😃', unhappy: '🙃', laugh: '🤣' };

  const handleLikeButtonClick = () => {
    console.log(postId);
    mutate(postId);
  };

  const handleEditClick = async () => {
    setIsEdit(true);
  };

  const handleDeleteClick = async () => {
    await fetchPostDelete(postId);
    alert('삭제된 글입니다!');
    navigate(-1);
  };

  if (data && !isEdit) {
    const { tags, comments, content, emoji, imgId, myLikeHeart, totalLikeHeart, title, memberId } = data;
    const isMyPost = parseInt(localStorage.getItem('member_id')) === memberId;
    return (
      <S.PostDetailWrapper>
        <S.Title>{`${EMOJI[emoji]} ${title}`}</S.Title>

        <S.HashTagWrapper>
          {tags.map((hashtag, idx) => (
            <S.HashTag key={idx}>#{hashtag.name}</S.HashTag>
          ))}
        </S.HashTagWrapper>
        <S.ImageWrapper>
          <S.Image src="https://i.ytimg.com/vi/j9rBUbgb4ao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYUjIshD9AsT0ko8QTBUhJA4aOkw" />
        </S.ImageWrapper>
        <S.Content readOnly>{content}</S.Content>
        {isPending ? (
          <S.LikedWrapper></S.LikedWrapper>
        ) : (
          <S.LikedWrapper>
            <S.LikedImageWrapper onClick={handleLikeButtonClick}>
              <Liked fill={myLikeHeart ? 'red' : 'white'} />
            </S.LikedImageWrapper>
            <S.LikedCount>{totalLikeHeart}</S.LikedCount>
          </S.LikedWrapper>
        )}
        {/* <S.LikedWrapper>
          <S.LikedImageWrapper onClick={handleLikeButtonClick}>
            <Liked fill={myLikeHeart ? 'red' : 'white'} />
          </S.LikedImageWrapper>
          <S.LikedCount>{likedCount}</S.LikedCount>
        </S.LikedWrapper> */}
        {isMyPost && (
          <S.EditWrapper>
            <S.EditPostButton onClick={handleEditClick}>수정</S.EditPostButton>
            <S.DeletePostButton onClick={handleDeleteClick}>삭제</S.DeletePostButton>
          </S.EditWrapper>
        )}
        <Comment postId={postId} comments={comments} />
      </S.PostDetailWrapper>
    );
  } else if (true && isEdit) {
    const { tags, content, emoji, imgId, title } = data;
    return <WritePage defaultPage={{ title, emoji, content, tags, imgId }}></WritePage>;
  }
};

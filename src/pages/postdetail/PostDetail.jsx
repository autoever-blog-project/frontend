import { Comment } from './Comment';
import * as S from './PostDetail.style';
import Liked from '@/assets/liked.svg?react';
import { useLikedMutation } from '@/hooks/usePostDetailQuery';
import { useState } from 'react';
import { fetchPostDelete } from '@/api/detail';
import { useNavigate } from 'react-router-dom';

export const PostDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  // const data = usePostDetailInfo();
  const title = '사심 채우면서 하는 개발';
  const hastags = ['에스파', '윈터', '존예'];
  const content =
    '에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야\n\n 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는 신이야 에스파는  ';
  const likedCount = '2326';
  const myLikeHeart = true;
  const postImage =
    'https://i.ytimg.com/vi/j9rBUbgb4ao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYUjIshD9AsT0ko8QTBUhJA4aOkw';

  const chkInfo = {
    title: '사심 채우면서 하는 개발',
    tags: ['에스파', '전체', '존예'],
    content: '에스파는 신이야',
    img: 'https://i.ytimg.com/vi/j9rBUbgb4ao/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYUjIshD9AsT0ko8QTBUhJA4aOkw',
    emoji: 'q',
  };

  const { mutate, isPending } = useLikedMutation();

  const navigate = useNavigate();

  const handleLikeButtonClick = () => {
    mutate;
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleDeleteClick = () => {
    fetchPostDelete();
  };

  const isMyPost = true;

  if (true && !isEdit) {
    return (
      <S.PostDetailWrapper>
        <S.Title>{title}</S.Title>
        <S.HashTagWrapper>
          {hastags.map((hashtag, idx) => (
            <S.HashTag key={idx}>#{hashtag}</S.HashTag>
          ))}
        </S.HashTagWrapper>
        <S.ImageWrapper>
          <S.Image src={postImage} />
        </S.ImageWrapper>
        <S.Content readOnly>{content}</S.Content>
        {isPending ? (
          '처리중'
        ) : (
          <S.LikedWrapper>
            <S.LikedImageWrapper onClick={handleLikeButtonClick}>
              <Liked fill={myLikeHeart ? 'red' : 'white'} />
            </S.LikedImageWrapper>
            <S.LikedCount>{likedCount}</S.LikedCount>
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
        <Comment />
      </S.PostDetailWrapper>
    );
  } else if (true && isEdit) {
    //inputData에 page정보 넣으면 될듯?
    navigate('/write', { state: { defaultPage: chkInfo } });
    // TODO: 세진이가 만든 글작성 페이지
  }
};

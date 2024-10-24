/* eslint-disable react/prop-types */
import * as S from './PostCardStyle.js';
import heartFill from '@/assets/Heartfill.svg';
import heartBlank from '@/assets/Heartblank.svg';
import imge from '@/assets/0.png';

function PostCardFooter({ member, postInfo }) {
  return (
    <div>
      <S.PostCardFooterContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* 사용자의 프로필 이미지 불러와서 넣기 */}
          <S.PostCardOwnerProfileImg src={imge} />
          <div>{member.nickname}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 20, gap: 7 }}>
          <div style={{ width: 15, height: 15, overflow: 'hidden' }}>
            <S.PostCardTotalHeart src={postInfo.like_heart === 1000 ? heartFill : heartBlank} />
          </div>
          <div>{postInfo.like_heart === 0 ? ' ' : postInfo.like_heart}</div>
        </div>
      </S.PostCardFooterContainer>
    </div>
  );
}

export default PostCardFooter;

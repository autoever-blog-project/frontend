/* eslint-disable react/prop-types */
import * as S from './PostCardStyle.js';
import heartFill from '@/assets/Heartfill.svg';

function PostCardFooter({ postInfo }) {
  return (
    <div>
      <S.PostCardFooterContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* 사용자의 프로필 이미지 불러와서 넣기 */}
          <S.PostCardOwnerProfileImg
            src={
              postInfo.memberId === 3763568772
                ? 'http://k.kakaocdn.net/dn/iBtdA/btsIJzzerRG/HRjjZh3MzsG34QTAVKVHl0/img_640x640.jpg'
                : localStorage.getItem('member_profile')
            }
          />
          <div>{postInfo.memberName}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 20, gap: 4 }}>
          <div style={{ width: 15, height: 15, overflow: 'hidden' }}>
            <S.PostCardTotalHeart src={heartFill} />
          </div>
          <div>{postInfo.like_heart === 0 ? 0 : postInfo.totalLikeHeart}</div>
        </div>
      </S.PostCardFooterContainer>
    </div>
  );
}

export default PostCardFooter;

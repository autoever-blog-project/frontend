import React from 'react';
import { Container, ProfileContainer, ProfileContent, ProfileImageWrapper, ProfileTextWrapper } from './MyPage.style';
import temp from '@/assets/dogprofile.jpg';

function MyPage() {
  return (
    <>
      <Container>
        <ProfileContainer>
          <ProfileContent>
            <ProfileImageWrapper>
              <img src={temp} />
            </ProfileImageWrapper>
            <ProfileTextWrapper>
              <h1>김퍼피</h1>
              <p>3세</p>
              <p>20.10.20</p>
            </ProfileTextWrapper>
          </ProfileContent>
        </ProfileContainer>
      </Container>
    </>
  );
}

export default MyPage;

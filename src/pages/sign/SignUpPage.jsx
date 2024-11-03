import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchPuppyImageWrite, fetchPuppyWrite } from '../../api/detail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { showPointIncreaseEffect } from '../../animation/animation';
import { useStore } from '../../components/store/point';

const SignUpPage = () => {
  const [image, setImage] = useState(null); // 파일 자체를 저장
  const { inc } = useStore();
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [weightId, setWeightId] = useState(1);
  const [imgId, setImgId] = useState(null); // 파일 경로 저장
  const navigate = useNavigate();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(e.target.files[0]));
    if (file) {
      const fileName = file.name; // 파일명 추출
      const filePath = `C:/images/${fileName}`; // 경로를 생성하여 imgId에 저장
      setImgId(filePath); // imgId에 경로 저장
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const puppyDto = {
        memberId: localStorage.getItem('member_id'),
        name: name,
        birth: birthday,
        //      imgId: imgId,
      };
      console.log(puppyDto);

      const puppyId = await fetchPuppyWrite(puppyDto);
      localStorage.setItem('puppy_info', puppyId.data);

      inc(20000);
      showPointIncreaseEffect(20000);
      navigate('/'); // 메인 페이지로 이동
    } catch (error) {
      console.error('Error registering puppy:', error);
    }
  };

  return (
    <PageWrapper>
      <Content>
        <h2>첫 미션: 강아지 정보 입력하기!</h2>
        <form onSubmit={handleSubmit}>
          <InputField>
            <label htmlFor="name">이름:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </InputField>
          <InputField>
            <label htmlFor="birthday">생일:</label>
            <input type="date" id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          </InputField>

          <SubmitButton type="submit">입력하기</SubmitButton>
        </form>
      </Content>
    </PageWrapper>
  );
};

// 스타일 정의
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  h2 {
    margin-bottom: 70px;
    font-size: large;
    font-weight: 600;
  }
`;

const ImageInput = styled.div`
  margin-bottom: 15px;
`;

const InputField = styled.div`
  margin-bottom: 30px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #45a049;
  }
`;

export default SignUpPage;

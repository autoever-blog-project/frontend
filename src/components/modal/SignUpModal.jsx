import React, { useEffect, useState } from 'react';
import * as S from './Modal.style'; // 스타일 파일
import { fetchPuppyWrite } from '../../api/detail';
import styled from 'styled-components';

const SignUpModal = ({ isOpen, onClose }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [weightId, setWeightId] = useState(1);
  const [imgId, setImgId] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0])); // 이미지 미리보기
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const puppyDto = {
      puppyId: 0,
      memberId: localStorage.getItem('member_id'),
      name: name,
      birth: birthday,
      weightId: weightId,
      imgId: imgId,
    };

    try {
      await fetchPuppyWrite(puppyDto);
      onClose(); // 모달 닫기
    } catch (error) {
      console.error('Error registering puppy:', error);
      // Handle error here (e.g., show a notification)
    }
  };

  const handleAddEvent = async () => {
    console.log(`Adding event: ${newEvent}`);

    const data = {
      title: 'aaa',
      content: newEvent,
      memberId: localStorage.getItem('member_id'),
      dueDate: selectDay,
      status: false,
    };

    try {
      await fetchTodoWrite(data);
      console.log('Event added successfully');
      setNewEvent('');
      handleRefresh();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    isOpen && (
      <S.ModalWrapper>
        <S.ModalContent>
          <S.CloseButton onClick={onClose}>X</S.CloseButton>
          <h2>정보 입력</h2>
          <form onSubmit={handleSubmit}>
            <S.ImageInput>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {image && <img src={image} alt="미리보기" />}
            </S.ImageInput>
            <S.InputField>
              <label htmlFor="name">이름:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </S.InputField>
            <S.InputField>
              <label htmlFor="birthday">생일:</label>
              <input
                type="date"
                id="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </S.InputField>
            <S.InputField>
              <label htmlFor="weightId">체중 ID:</label>
              <input
                type="number"
                id="weightId"
                value={weightId}
                onChange={(e) => setWeightId(e.target.value)}
                required
              />
            </S.InputField>
            <S.SubmitButton type="submit">제출</S.SubmitButton>
          </form>
        </S.ModalContent>
      </S.ModalWrapper>
    )
  );
};

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  float: right;
`;

export const ImageInput = styled.div`
  margin-bottom: 15px;
  input[type='file'] {
    display: block;
    margin-bottom: 10px;
  }
`;

export const InputField = styled.div`
  margin-bottom: 15px;
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

export const SubmitButton = styled.button`
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

export default SignUpModal;

import { useRef, useState } from 'react';
import plusIcon from '@/assets/PlusIcon.svg';
import * as S from './WritePageStyle.js';

function WritePageImage() {
  const imgRef = useRef();
  const [preview, setPreview] = useState(null); // 이미지 미리보기 상태
  const imgUploadHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // 이미지 파일을 DataURL로 변환하여 미리보기 설정
      };
      reader.readAsDataURL(file); // 이미지 파일 읽기
    }
  };

  return (
    <S.WritePageImgContainer>
      {preview ? (
        <img src={preview} alt="image preview" style={{ width: '300px', height: '300px' }} />
      ) : (
        <S.WritePageImgSubmitContainer>
          <S.WritePageImageInput
            id="inputImg"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={imgUploadHandler}
            ref={imgRef}
          />
          <S.WritePageImageInputOverlay />
          <img src={plusIcon} style={{ width: 40 }} alt="plus icon" />
        </S.WritePageImgSubmitContainer>
      )}
    </S.WritePageImgContainer>
  );
}

export default WritePageImage;

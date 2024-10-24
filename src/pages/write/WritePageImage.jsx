/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import plusIcon from '@/assets/PlusIcon.svg';
import * as S from './WritePageStyle.js';

const WritePageImage = forwardRef((props, ref) => {
  const imgRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const imgUploadHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useImperativeHandle(ref, () => ({
    getImage: () => {
      return imgRef.current.files[0];
    },
  }));

  return (
    <S.WritePageImgContainer>
      {preview ? <img src={preview} alt="image preview" style={{ width: '250px', height: '250px' }} /> : <></>}
      <S.WritePageImgSubmitContainer $isPreview={preview}>
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
    </S.WritePageImgContainer>
  );
});
WritePageImage.displayName = 'WritePageImage';
export default WritePageImage;

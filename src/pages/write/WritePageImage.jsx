/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import plusIcon from '@/assets/PlusIcon.svg';
import * as S from './WritePageStyle.js';
import { authenticated } from '../../api/axiosInstance.js';

const WritePageImage = forwardRef(({ defaultImage, subMitImgID }, ref) => {
  const imgRef = useRef(null);
  const [imgId, setImgId] = useState(null);
  const [preview, setPreview] = useState(defaultImage.defaultImage);
  const imgUploadHandler = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      if (file) {
        formData.append('image', file);
      }
      console.log(formData);
      const chk = await authenticated.post('/post/img', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(chk);
      setImgId(chk.data);
      subMitImgID(chk.data);
    }
  };
  useImperativeHandle(ref, () => ({
    getImage: () => {
      return imgRef.current.files[0];
    },
  }));

  return (
    <S.WritePageImgContainer>
      {preview ? (
        <img src={preview} alt="image preview" style={{ width: '250px', height: '250px', position: 'absolute' }} />
      ) : (
        <></>
      )}
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

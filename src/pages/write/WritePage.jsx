/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import WritePageEditor from './WritePageEditor.jsx';
import WritePageImage from './WritePageImage.jsx';
import WritePageRadio from './WritePageRadio.jsx';
import * as S from './WritePageStyle.js';
import WritePageTag from './WritePageTag.jsx';
import WritePageTitleInput from './WritePageTitleInput.jsx';
import { fetchPostWrite, fetchPostUpdate } from '../../api/detail.js';
import { useNavigate } from 'react-router-dom';

function WritePage({ defaultPage }) {
  const defaultPage1 = defaultPage || null;
  const imgRef = useRef();
  const contentRef = useRef();
  const [postFlag, setPostFlag] = useState(0);
  const [defaultPageInfo, setDefaultPageInfo] = useState(defaultPage);
  const [imgId, setimgId] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // contentRef.current.setContent('qwe');
    //defaultPage1이 null이 아니면 selected
    defaultPage == null ? setDefaultPageInfo({ tags: [] }) : defaultPage1['tags'];

    if (defaultPage !== null) {
      setPostFlag(1);
    }
    handleSubmitTag(defaultPageInfo);
  }, []);
  const submitData = { tags: [] };
  //이모지 따라 나올 글귀 리스트
  const emojies = ['q', 'w', 'e'];
  const parsingContent = (content, before, after) => {
    before.map((item, idx) => {
      const regx = new RegExp(item, 'g');
      content = content.replace(regx, after[idx]);
    });
    return content;
  };

  console.log(defaultPage1);
  console.log(postFlag);
  const handleSubmitTag = (selectedTag) => {
    if (submitData['tags'].includes(selectedTag)) {
      return (submitData['tags'] = submitData['tags'].filter((i) => i !== selectedTag));
    } else {
      return (submitData['tags'] = [...submitData['tags'], selectedTag]);
    }
  };
  const handleSubmit = () => {
    if (formRef.current) {
      const textAndRadioInput = new FormData(formRef.current);
      textAndRadioInput.forEach((value, key) => {
        submitData[key] = value;
      });
      submitData['emoji'] = emojies[submitData['emoji']];
    }
    if (submitData['title'] === null) {
      alert('제목을 정해주세요!');
      return;
    }
    if (submitData['emoji'] === null) {
      alert('기분을 정해주세요!');
      return;
    }

    if (submitData['tags'].length == 0) {
      alert('카테고리를 정해주세요!');
      return;
    } else {
      submitData['tags'] = submitData['tags'].map((item) => ({ name: item }));
    }
    if (contentRef.current) {
      var contentBeforeParsing = contentRef.current.getContent();
      submitData['content'] = parsingContent(contentBeforeParsing, ['<p>', '</p>', '<br>'], ['', '\r\n', '\r\n']);
    } else {
      alert('내용을 입력해주세요!');
      return;
    }

    if (imgRef.current) {
      // const inputImg = imgRef.current.getImage();
      // submitData['img'] = inputImg;
    } else {
      alert('이미지를 입력해주세요!');
      return;
    }
    //여기에 이제 전송하면됨
    //post일떄
    console.log(defaultPage1, defaultPage);
    if (postFlag === 0) {
      submitData[''];
      //string to num
      submitData['memberId'] = parseInt(localStorage.getItem('member_id'));
      (submitData['totalLikeHeart'] = 0), (submitData['my_like_heart'] = false);
      submitData['imgId'] = imgId;
      fetchPostWrite(submitData);
    } else {
      fetchPostUpdate(defaultPage1.imgId, submitData);
    }
    navigate(`/detail/${defaultPage1.imgId}`);
    //edit일 때
    // else {
    // }
  };
  const formRef = useRef(null);
  return (
    <div>
      {defaultPage1 === null ? (
        <S.WritePageViewContainer>
          <form ref={formRef} style={{ width: '100%', paddingLeft: 5 }}>
            <WritePageTitleInput defaultvalue={''} />
            <WritePageRadio defaultEmoji={''} />
          </form>
          <WritePageTag onSubmitTags={handleSubmitTag} defaultTags={[]} />
          <WritePageEditor defaultValue={''} ref={contentRef} />
          <WritePageImage ref={imgRef} defaultImage={''} subMitImgID={setimgId} />
          <S.WritePageSubmitButton
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            완료
          </S.WritePageSubmitButton>
        </S.WritePageViewContainer>
      ) : (
        <S.WritePageViewContainer>
          <form ref={formRef} style={{ width: '100%', paddingLeft: 5 }}>
            <WritePageTitleInput defaultvalue={defaultPage1['title']} />
            <WritePageRadio defaultEmoji={defaultPage1['emoji']} />
          </form>
          <WritePageTag onSubmitTags={handleSubmitTag} defaultTags={defaultPage1['tags']} />
          <WritePageEditor defaultValue={defaultPage1['content']} ref={contentRef} />
          <WritePageImage ref={imgRef} defaultImage={defaultPage1['imgId']} subMitImgID={setimgId} />
          <S.WritePageSubmitButton
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            완료
          </S.WritePageSubmitButton>
        </S.WritePageViewContainer>
      )}
    </div>
  );
}

export default WritePage;

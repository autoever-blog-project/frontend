/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import WritePageEditor from './WritePageEditor.jsx';
import WritePageImage from './WritePageImage.jsx';
import WritePageRadio from './WritePageRadio.jsx';
import * as S from './WritePageStyle.js';
import WritePageTag from './WritePageTag.jsx';
import WritePageTitleInput from './WritePageTitleInput.jsx';

function WritePage() {
  const imgRef = useRef();
  const contentRef = useRef();
  const [postFlag, setPostFlag] = useState(0);
  useEffect(() => {
    // contentRef.current.setContent('qwe');
  }, []);
  const submitData = { tag: [] };
  //이모지 따라 나올 글귀 리스트
  const emojies = ['q', 'w', 'e'];
  const parsingContent = (content, before, after) => {
    before.map((item, idx) => {
      const regx = new RegExp(item, 'g');
      content = content.replace(regx, after[idx]);
    });
    return content;
  };
  const handleSubmitTag = (selectedTag) => {
    if (submitData['tag'].includes(selectedTag)) {
      return (submitData['tag'] = submitData['tag'].filter((i) => i !== selectedTag));
    } else {
      return (submitData['tag'] = [...submitData['tag'], selectedTag]);
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
    if (submitData['tag'].length == 0) {
      alert('카테고리를 정해주세요!');
    } else {
      submitData['tag'] = submitData['tag'].map((item) => ({ name: item }));
    }
    if (contentRef.current) {
      var contentBeforeParsing = contentRef.current.getContent();
      submitData['content'] = parsingContent(contentBeforeParsing, ['<p>', '</p>', '<br>'], ['', '\r\n', '\r\n']);
    } else {
      alert('내용을 입력해주세요!');
    }

    if (imgRef.current) {
      const inputImg = imgRef.current.getImage();
      submitData['img'] = inputImg;
    } else {
      alert('이미지를 입력해주세요!');
    }
    //여기에 이제 전송하면됨
    //post일떄
    if (postFlag === 0) {
      alert(`input is ${submitData}`);
      console.log(submitData);
    }
    //edit일 때
    // else {
    // }
  };
  const formRef = useRef(null);
  return (
    <div>
      <S.WritePageViewContainer>
        <form ref={formRef} style={{ width: '100%', paddingLeft: 5 }}>
          <WritePageTitleInput defaultvalue={''} />
          {/* <S.WritePageTextInput
            type="text"
            name="title"
            style={{ fontSize: 40, paddingLeft: 10 }}
            placeholder="제목을 입력하세요"
          /> */}
          {/* 라디오 선택시 효과 및 선택값 보여주기 */}
          <WritePageRadio defaultEmoji={''} />
        </form>
        <WritePageTag onSubmitTags={handleSubmitTag} defaultTags={['전체']} />
        <WritePageEditor defaultValue={''} ref={contentRef} />
        <WritePageImage ref={imgRef} />
        <S.WritePageSubmitButton
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          완료
        </S.WritePageSubmitButton>
      </S.WritePageViewContainer>
    </div>
  );
}

export default WritePage;

/* eslint-disable react/prop-types */
import { useState } from 'react';
import TagButton from '../../components/TagButton/TagButton.jsx';
import * as S from './WritePageStyle.js';

function WritePageTag({ onSubmitTags }) {
  //tag리스트
  const tags = ['전체', '강아지', '여행qweqeqweqweq'];
  const [selectedTag, setSelectedTag] = useState([]);
  const handleTagBtnClick = (tag) => {
    setSelectedTag((prevTags) => {
      if (prevTags.includes(tag)) {
        return prevTags.filter((i) => i !== tag);
      } else {
        return [...prevTags, tag];
      }
    });
    onSubmitTags(selectedTag);
  };
  return (
    <div style={{ width: '100%', height: '100px' }}>
      <p style={{ color: 'gray' }}>
        {selectedTag.length == 0 ? '카테고리를 선택하세요' : selectedTag.map((item) => `#${item}`)}
      </p>
      <S.WritePageTagContainer>
        {tags.map((item, idx) => (
          <TagButton submitTag={handleTagBtnClick} key={idx} tag={item} />
        ))}
      </S.WritePageTagContainer>
    </div>
  );
}

export default WritePageTag;

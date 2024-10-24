/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import TagButton from '../../components/TagButton/TagButton.jsx';
import * as S from './WritePageStyle.js';

function WritePageTag({ defaultTags, onSubmitTags }) {
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
  };
  useEffect(() => {
    setSelectedTag(defaultTags);
    console.log(selectedTag, defaultTags);
  }, []);

  return (
    <div style={{ width: '100%', height: '100px' }}>
      <div style={{ height: '20px' }}>
        {selectedTag.length == 0 ? (
          <p style={{ color: 'gray', paddingLeft: '15px' }}>카테고리를 선택하세요</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {selectedTag.map((item, idx) => (
              <p key={idx} style={{ fontSize: '20px', paddingLeft: '15px' }}>
                {`#${item}`}
              </p>
            ))}
          </div>
        )}
      </div>
      <S.WritePageTagContainer>
        {tags.map((item, idx) => {
          return (
            <TagButton
              submitTag={(tag) => {
                handleTagBtnClick(tag);
                onSubmitTags(tag);
              }}
              key={idx}
              tag={item}
              already={selectedTag.includes(item)}
            />
          );
        })}
      </S.WritePageTagContainer>
    </div>
  );
}

export default WritePageTag;

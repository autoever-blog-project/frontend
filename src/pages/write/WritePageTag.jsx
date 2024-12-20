/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import TagButton from '../../components/TagButton/TagButton.jsx';
import * as S from './WritePageStyle.js';

function WritePageTag({ defaultTags, onSubmitTags }) {
  //tag리스트
  const tags = ['산책', '여행', '목욕'];
  const [selectedTag, setSelectedTag] = useState([]);
  const handleTagBtnClick = (tag) => {
    setSelectedTag((prevTags) => {
      let isInclude = false;
      for (let i of selectedTag) {
        if (Object.values(i).includes(tag)) {
          isInclude = true;
          break;
        }
      }

      if (isInclude) {
        return prevTags.filter((i) => i.name !== tag);
      } else {
        return [...prevTags, { name: tag }];
      }
    });
  };
  useEffect(() => {
    setSelectedTag(defaultTags);
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
                {`#${item.name}`}
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

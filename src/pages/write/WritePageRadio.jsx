import { useEffect, useState } from 'react';
import * as S from './WritePageStyle.js';
import emojiTest from '@/assets/emoji _slightly frowning face.svg';

function WritePageRadio({ defaultEmoji }) {
  const [radioInput, setRadioInput] = useState('');
  const handleRadioClick = (value) => {
    setRadioInput(value);
  };
  useEffect(() => {
    emojiList.map((item, idx) => {
      if (item === defaultEmoji) {
        setRadioInput(idx);
      }
    });
  }, []);
  //emoji 리스트
  //이모지 따라 나올 글귀 리스트
  const emojiList = ['q', 'w', 'e'];
  return (
    <div>
      <S.WritePageRadioContainer style={{ paddingLeft: 10 }}>
        <div>
          {radioInput !== '' ? <>{emojiList[radioInput]}</> : <p style={{ color: 'gray' }}>오늘의 기분을 표현해요</p>}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          {emojiList.map((item, idx) => (
            <S.WritePageRadioInputContainer key={idx} onClick={() => handleRadioClick(idx)}>
              <img src={emojiTest} />
              <input
                type="radio"
                name="emoji"
                checked={radioInput === idx}
                value={idx}
                onChange={() => console.log()}
              />
            </S.WritePageRadioInputContainer>
          ))}
        </div>
      </S.WritePageRadioContainer>
    </div>
  );
}

export default WritePageRadio;

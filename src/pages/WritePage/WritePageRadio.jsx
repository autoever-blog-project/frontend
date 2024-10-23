import { useState } from 'react';
import * as S from './WritePageStyle.js';
import emoji from '@/assets/emoji _slightly frowning face.svg';

function WritePageRadio() {
  const [radioInput, setRadioInput] = useState('');
  const handleRadioClick = (value) => {
    setRadioInput(value);
  };
  //emoji 리스트
  const emojiList = new Array(5).fill(emoji);
  return (
    <div>
      <S.WritePageRadioContainer>
        {emojiList.map((item, idx) => (
          <S.WritePageRadioInputContainer key={idx} onClick={() => handleRadioClick(idx)}>
            <img src={item} />
            <input type="radio" name="emoji" checked={radioInput === idx} value={idx} onChange={() => console.log()} />
          </S.WritePageRadioInputContainer>
        ))}
      </S.WritePageRadioContainer>
    </div>
  );
}

export default WritePageRadio;

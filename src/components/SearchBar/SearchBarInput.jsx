import { useState } from 'react';
import * as S from './SearchBarStyle.js';

// eslint-disable-next-line react/prop-types
function SearchBarInput({ onSubmitData }) {
  const defaultPlaceholder = '검색어를 입력해주세요.';
  const [placeHolder, setPlaceHolder] = useState(defaultPlaceholder);

  return (
    <div>
      <S.SearchBarInputField
        type="text"
        placeholder={placeHolder}
        onClick={() => {
          setPlaceHolder('');
        }}
        onChange={(e) => onSubmitData(e.target.value)}
        onBlur={() => {
          setPlaceHolder(defaultPlaceholder);
        }}
      ></S.SearchBarInputField>
    </div>
  );
}

export default SearchBarInput;

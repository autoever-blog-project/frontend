import SearchBarInput from './SearchBarInput';
import { useState } from 'react';
import * as S from './SearchBarStyle.js';
import SearchBarButton from './SearchBarButton.jsx';

function SearchBar() {
  const [inputData, setInputData] = useState('');

  //입력값으로 검색
  const searchWithData = () => {
    console.log(inputData);
  };

  const handleKeyup = (e) => {
    if (e.key == 'Enter') {
      searchWithData(inputData);
    }
  };
  return (
    <div>
      <S.SearchBarContainer onKeyUp={handleKeyup}>
        <SearchBarButton pressButton={searchWithData} />
        <div style={{ flexGrow: 1, marginRight: 25 }}>
          <SearchBarInput onSubmitData={setInputData}></SearchBarInput>
        </div>
      </S.SearchBarContainer>
    </div>
  );
}

export default SearchBar;

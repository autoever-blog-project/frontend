import SearchBarInput from './SearchBarInput';
import { useState } from 'react';
import * as S from './SearchBarStyle.js';
import SearchBarButton from './SearchBarButton.jsx';
import { useNavigate } from 'react-router-dom';

function SearchBar({ defaultValue, handleChange }) {
  const [inputData, setInputData] = useState('');
  const navigate = useNavigate();

  //입력값으로 검색
  const searchWithData = (inputData) => {
    navigate('/post', { state: { searchData: inputData } });
    // handleChange(inputData);
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
          <SearchBarInput defaultValue={defaultValue} onSubmitData={setInputData}></SearchBarInput>
        </div>
      </S.SearchBarContainer>
    </div>
  );
}

export default SearchBar;

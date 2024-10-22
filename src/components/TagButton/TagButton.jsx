/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as S from './TagButtonStyle.js';

function TagButton({ tag }) {
  const [clicked, setClicked] = useState(true);
  return (
    <div style={{ width: 'fit-content' }} onClick={() => setClicked(!clicked)}>
      <S.TagButtonContainer clicked={clicked}>{tag}</S.TagButtonContainer>
    </div>
  );
}

export default TagButton;

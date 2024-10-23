/* eslint-disable react/prop-types */
import { useState } from 'react';
import * as S from './TagButtonStyle.js';

function TagButton({ tag, submitTag }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      style={{ width: 'fit-content' }}
      onClick={() => {
        setClicked(!clicked);
        submitTag(tag);
      }}
    >
      <S.TagButtonContainer $clicked={clicked}>
        <S.TagButtonOverlay className="overlay" />
        {tag}
      </S.TagButtonContainer>
    </div>
  );
}

export default TagButton;

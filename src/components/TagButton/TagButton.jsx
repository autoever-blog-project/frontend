/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import * as S from './TagButtonStyle.js';

function TagButton({ tag, submitTag, already }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{ width: 'fit-content' }}
      onClick={() => {
        setClicked(!clicked);
        submitTag(tag);
      }}
    >
      <S.TagButtonContainer $clicked={already}>
        <S.TagButtonOverlay className="overlay" />
        {tag}
      </S.TagButtonContainer>
    </div>
  );
}

export default TagButton;

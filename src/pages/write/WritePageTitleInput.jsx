import { useEffect, useState } from 'react';
import * as S from './WritePageStyle.js';
function WritePageTitleInput({ defaultvalue }) {
  //   useEffect(() => {
  //     setValue(defaultvalue);
  //   }, [defaultvalue]);
  return (
    <div>
      <S.WritePageTextInput
        type="text"
        name="title"
        style={{ fontSize: 40, paddingLeft: 10 }}
        placeholder="제목을 입력하세요"
        // value={value}
        defaultValue={defaultvalue}
      />
    </div>
  );
}

export default WritePageTitleInput;

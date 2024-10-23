import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as S from './WritePageStyle.js';
import { useRef, useState } from 'react';

function WritePageEditor() {
  const editorRef = useRef();
  const [editorHtml, setEditorHtml] = useState('');
  const [isVisible, setIsVisble] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (html) => {
    setEditorHtml(html); // 에디터의 내용을 상태로 저장
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }], // 제목 크기
      ['bold', 'italic', 'underline'], // 스타일 버튼
      [{ list: 'ordered' }, { list: 'bullet' }], // 리스트
      ['clean'], // 포맷 초기화 버튼
    ],
  };
  return (
    <S.WritePageEditorContainer
      isHovered={isVisible}
      isFocused={isFocused}
      onMouseEnter={() => setIsVisble(true)}
      onMouseLeave={() => setIsVisble(false)}
    >
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        placeholder="내용을 입력하세요..."
        modules={modules}
        onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
      />
    </S.WritePageEditorContainer>
  );
}

export default WritePageEditor;

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as S from './WritePageStyle.js';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const WritePageEditor = forwardRef(({ defaultValue }, ref) => {
  const editorRef = useRef();
  const [editorHtml, setEditorHtml] = useState();
  const [isVisible, setIsVisble] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (html) => {
    setEditorHtml(html);
  };
  useImperativeHandle(ref, () => ({
    getContent: () => {
      return editorRef.current.props.value;
    },
  }));
  useEffect(() => {
    setEditorHtml(`<p>${defaultValue}</p>`);
  }, []);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['clean'],
    ],
  };
  return (
    <S.WritePageEditorContainer
      $isHovered={isVisible}
      $isFocused={isFocused}
      onMouseEnter={() => setIsVisble(true)}
      onMouseLeave={() => setIsVisble(false)}
    >
      <ReactQuill
        ref={editorRef}
        value={editorHtml}
        onChange={handleChange}
        placeholder="내용을 입력하세요..."
        modules={modules}
        onFocus={() => setIsFocused(true)}
      />
    </S.WritePageEditorContainer>
  );
});
WritePageEditor.displayName = 'WritePageEditor';
export default WritePageEditor;

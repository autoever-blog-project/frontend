import styled from 'styled-components';

export const WritePageViewContainer = styled.div`
  width: 100%;
  height: fit-content;
  gap: 10px;
  box-sizing: border-box;
  //height 수정해야함
  max-height: 1200px;
  padding-top: 190px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;

//WritePAgeView구성요소

export const WritePageTextInput = styled.input`
  width: 100%;
  /* font-size: 40px; */
  box-sizing: border-box;
  text-align: left;
  overflow-y: auto;
  padding-bottom: 30px;
  border: none;
  background-color: white;
  outline: transparent;
  border-bottom: 1px solid black;
  padding-left: 10px;
`;

export const WritePageRadioContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 120px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
`;
export const WritePageTagContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 15px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 10px;
`;

export const WritePageEditorContainer = styled.div`
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  .quill {
    height: 250px;
  }
  .ql-container {
    border: 0px solid black;
    overflow: hidden;
  }
  .ql-toolbar {
    display: none;
    border-radius: 10px;
    /* display: flex; */
    /* display: ${(props) => (props.$isHovered || props.$isFocused ? 'block' : 'none')}; */
    transition: opacity 1s ease;
  }

  .ql-editor {
    height: 100%;
    background-color: transparent;
    strong {
      font-weight: bold;
    }
    em {
      font-style: italic;
    }
  }
  //여기도 font 맞추기
  .ql-editor::before {
    font-size: 30px;
    font-style: normal;
  }
  .ql-editor:focus {
    &::before {
      font-size: 0px;
    }
  }
`;

export const WritePageImgContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const WritePageSubmitButton = styled.button`
  border: 1px solid black;
  border-radius: 13px;
  padding-left: 10px;
  padding-right: 10px;
  height: 35px;
  width: 80px;
  outline: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  &:hover .overlay {
    opacity: 0.5;
  }
  &:active .overlay {
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:active {
    transform: scale(0.98);
  }
`;

//WritePageRadioContainer 구성 요소

export const WritePageRadioInputContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

//WritePageImgContainer 구성요소

export const WritePageImgSubmitContainer = styled.div`
  width: ${(props) => (props.$isPreview ? '250px' : '200px')};
  height: ${(props) => (props.$isPreview ? '250px' : '200px')};
  opacity: ${(props) => (props.$isPreview ? 0 : 1)};

  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  &:hover {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }
`;

export const WritePageImageInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const WritePageImageInputOverlay = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 1;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: transparent;
`;

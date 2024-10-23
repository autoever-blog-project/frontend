import styled from 'styled-components';

export const WritePageViewContainer = styled.div`
  width: 100%;
  height: fit-content;
  gap: 10px;
  box-sizing: border-box;
  //height 수정해야함
  max-height: 1000px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
  border-bottom: 2px solid gray;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

export const WritePageRadioContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 30px;
`;
export const WritePageTagContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  border: none;
  gap: 10px;
`;

export const WritePageEditorContainer = styled.div`
  width: 100%;
  height: 300px;
  .quill {
    height: 250px;
  }
  .ql-container {
    border: 0px solid black;
    overflow: hidden;
  }
  .ql-toolbar {
    border-radius: 10px;
    /* display: flex; */
    visibility: ${(props) =>
      props.isHovered || props.isFocused ? 'visible' : 'hidden'}; /* hover 상태에 따라 보이기 */
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
`;

//WritePageRadioContainer 구성 요소

export const WritePageRadioInputContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
`;

//WritePageImgContainer 구성요소

export const WritePageImgSubmitContainer = styled.div`
  width: 200px;
  height: 200px;
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

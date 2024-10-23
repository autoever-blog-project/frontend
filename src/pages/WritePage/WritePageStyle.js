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

export const WritePageRadioInputContainer = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
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

export const WritePageEditorContainer = styled.div``;

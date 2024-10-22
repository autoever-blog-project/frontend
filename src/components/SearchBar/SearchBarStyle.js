import styled from 'styled-components';

export const SearchBarInputField = styled.input`
  text-align: left;
  color: black;
  height: 50px;
  font-size: 17px;
  /* font-weight: 400; */
  width: 100%;
  background-color: transparent;
  outline: transparent;
  border: 0;
  flex-grow: 1;
  padding: 0 0;
  &::placeholder {
  }
`;
//postpage topcontainer와 width 맞추기
export const SearchBarContainer = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 80px;
  border: 1px black solid;
  /* justify-content: center; */
  align-items: center;
  display: flex;
`;

import styled from 'styled-components';

export const SearchBarInputField = styled.input`
  text-align: left;
  color: black;
  height: 60px;
  font-size: 30px;
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

export const SearchBarContainer = styled.div`
  width: 600px;
  height: 70px;
  border-radius: 80px;
  border: 1px black solid;
  /* justify-content: center; */
  align-items: center;
  display: flex;
`;

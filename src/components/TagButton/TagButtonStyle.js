import styled from 'styled-components';

export const TagButtonContainer = styled.button`
  border: 1px solid ${(props) => (props.clicked ? 'black' : 'red')};
  color: ${(props) => (props.clicked ? 'black' : 'red')};
  border-radius: 13px;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: gray;
    border: 1px solid gray;
  }
`;

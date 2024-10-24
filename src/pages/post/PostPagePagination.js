import styled from 'styled-components';

//pagination

export const PostPagePaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PostPagePaginationButton = styled.button`
  margin: 0 5px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  color: black;
  font-size: 15px;
  cursor: pointer;

  &:enabled:hover {
    background-color: gray;
    color: white;
  }

  &:disabled {
    background-color: gray;
    color: white;
    cursor: default;
  }
`;

export const PostPagePaginationArrowButton = styled.button`
  margin: 0 5px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  &:enabled:hover {
    background-color: gray;
    color: white;
  }

  &:disabled {
    color: gray;
    cursor: default;
  }
`;

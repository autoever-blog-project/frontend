import styled from 'styled-components';

export const PostPageViewBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
`;

//PostPageViewBodyContainer 구성요소

export const PostPageTopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

//searchBar width와 동일하게 (상단 태그 버튼 컨테이너)
export const PostPageTagButtonListContainer = styled.div`
  width: fit-content;
  min-width: 500px;
  display: flex;
  justify-content: start;
  gap: 5px;
`;

export const PostPagePostGridContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: center;
  align-items: start;
  min-height: 720px;
`;

//dropDown

//pagination

export const PostPagePaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PostPagePaginationButton = styled.button`
  margin: 0 5px;
  padding: 10px;
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
    cursor: not-allowed;
  }
`;

export const PostPagePaginationArrowButton = styled.button`
  margin: 0 5px;
  padding: 10px;
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
    cursor: not-allowed;
  }
`;

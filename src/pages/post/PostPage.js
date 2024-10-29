import styled from 'styled-components';

export const PostPageViewBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
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

//grid
export const PostPagePostGridPostCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

//dropDown

export const PostPageDropDownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const WritePostButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 50px;
  background: transparent;
  border: none;

  cursor: pointer;
`;

export const WritePostImg = styled.img`
  width: 177px;
  height: 210px;
`;

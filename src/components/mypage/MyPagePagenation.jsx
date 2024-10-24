import React from 'react';
import styled from 'styled-components';

function MyPagePagenation({ serverData, movePage }) {
  return (
    <PagenationContainer>
      {serverData.prev ? (
        <PrevButton
          onClick={() => {
            movePage({ page: serverData.prevPage });
          }}
        >
          prev
        </PrevButton>
      ) : null}
      {serverData.pageNumList.map((item, i) => {
        return (
          <PageList
            key={i}
            onClick={() => {
              movePage({ page: item });
            }}
            isSelected={serverData.current === item}
          >
            {item}
          </PageList>
        );
      })}
      {serverData.next ? (
        <NextButton
          onClick={() => {
            movePage({ page: serverData.nextPage });
          }}
        >
          next
        </NextButton>
      ) : null}
    </PagenationContainer>
  );
}

const PagenationContainer = styled.div`
  display: flex;
  gap: calc(8px);
  justify-content: center;
`;
const PrevButton = styled.div`
  padding: 4px;
`;

const PageList = styled.div`
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  :hover {
    background-color: gray;
  }
  background-color: ${({ isSelected }) => (isSelected ? '#808080' : '#fff')};
`;

const NextButton = styled.div`
  padding: 4px;
`;
export default MyPagePagenation;

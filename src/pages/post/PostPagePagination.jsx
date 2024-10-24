/* eslint-disable react/prop-types */
import * as S from './PostPagePagination.js';

function PostPagePagination({ beforeCurrentPage, currentPage, totalPages }) {
  return (
    <div>
      <S.PostPagePaginationContainer>
        <S.PostPagePaginationArrowButton
          onClick={() => currentPage((prev) => Math.max(prev - 1, 1))}
          disabled={beforeCurrentPage === 1}
        >
          {'<'}
        </S.PostPagePaginationArrowButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.PostPagePaginationButton
            key={index}
            onClick={() => currentPage(index + 1)}
            disabled={beforeCurrentPage === index + 1}
          >
            {index + 1}
          </S.PostPagePaginationButton>
        ))}
        <S.PostPagePaginationArrowButton
          onClick={() => currentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={beforeCurrentPage === totalPages}
        >
          {'>'}
        </S.PostPagePaginationArrowButton>
      </S.PostPagePaginationContainer>
    </div>
  );
}

export default PostPagePagination;

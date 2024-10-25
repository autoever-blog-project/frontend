import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import TagButton from '@/components/TagButton/TagButton.jsx';
import * as S from './PostPage.js';
import PostCard from '@/components/PostCard/PostCard.jsx';
import DropDown from '@/components/DropDown/DropDown.jsx';
import PostPagePagination from './PostPagePagination.jsx';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPostWithSearch, fetchPostWithTag } from '../../api/detail.js';

function PostPage() {
  //태그 리스트
  const tags = ['강아지', '여행', '댕스타그램', '산책'];
  const inputData = useLocation().state?.searchData || '';
  const [postInfos, setPostInfos] = useState([]);
  //inputData로 검색 날리기
  const fetchData = async () => {
    try {
      const postList = await fetchPostWithSearch(inputData, 1);
      setPostInfos(postList.data.dtoList);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [inputData]);

  //pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = postInfos.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(postInfos.length / itemsPerPage);
  const handleCurrentPage = (now) => {
    setCurrentPage(now);
  };
  const [selectedTag, setSelectedTag] = useState('');
  const sortByTag = (tag) => {
    setSelectedTag(tag);
    async () => {
      try {
        const postList = await fetchPostWithTag(tag, 1);
        setPostInfos(postList.data.dtoList);
      } catch (e) {
        console.log(e);
      }
    };
    //postInfos sort하는 기능 (api랑 연동시 제작)
  };
  return (
    <div>
      <S.PostPageViewBodyContainer>
        <S.PostPageTopContainer>
          <SearchBar defaultValue={inputData} />
          <S.PostPageTagButtonListContainer>
            {tags.map((item, idx) => (
              <TagButton key={idx} tag={item} submitTag={(tag) => sortByTag(tag)} already={item === selectedTag} />
            ))}
          </S.PostPageTagButtonListContainer>
        </S.PostPageTopContainer>
        <S.PostPageDropDownContainer>
          <DropDown submitSort={sortByTag} />
        </S.PostPageDropDownContainer>
        <S.PostPagePostGridContainer>
          {currentItems.map((item, idx) => (
            <S.PostPagePostGridPostCardContainer key={idx}>
              <PostCard postInfo={item} />
            </S.PostPagePostGridPostCardContainer>
          ))}
        </S.PostPagePostGridContainer>
        <PostPagePagination beforeCurrentPage={currentPage} currentPage={handleCurrentPage} totalPages={totalPages} />
      </S.PostPageViewBodyContainer>
    </div>
  );
}

export default PostPage;

import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import TagButton from '@/components/TagButton/TagButton.jsx';
import * as S from './PostPage.js';
import PostCard from '@/components/PostCard/PostCard.jsx';
import DropDown from '@/components/DropDown/DropDown.jsx';
import PostPagePagination from './PostPagePagination.jsx';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PostPage() {
  //태그 리스트
  const tags = ['전체', '강아지', '여행qweqeqweqweq'];
  const inputData = useLocation().state?.searchData || '';
  //inputData로 검색 날리기
  //더미 데이터
  const postInfo = {
    title: 'qwiTw',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam tempora magni dolorum doloremque placeat, incidunt culpa et natus excepturi rem dolorem modi distinctio amet nihil odit? Consequatur, itaque repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam tempora magni dolorum doloremque placeat, incidunt culpa et natus excepturi rem dolorem modi distinctio amet nihil odit? Consequatur, itaque repellendus?',
    post_date: new Date(),
    img: '@/assets/0.png',
    tag: '강아지 마트',
    emoji: '@/assets/hashtag.png',
    like_heart: 1000,
  };
  const member = {
    nickname: '송지웅',
  };
  //게시글 정보 리스트
  const postInfos = new Array(9).fill(postInfo);

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
              <PostCard postInfo={item} member={member} />
            </S.PostPagePostGridPostCardContainer>
          ))}
        </S.PostPagePostGridContainer>
        <PostPagePagination beforeCurrentPage={currentPage} currentPage={handleCurrentPage} totalPages={totalPages} />
      </S.PostPageViewBodyContainer>
    </div>
  );
}

export default PostPage;

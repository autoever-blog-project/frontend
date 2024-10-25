import { authenticated } from './axiosInstance';

// 포스트 상세페이지
export const fetchPostDetail = async (postId) => {
  return await authenticated.get(`post/${postId}`);
};

// 좋아요 기능
export const fetchLiked = async (postId) => {
  return await authenticated.post(`post/${postId}/like`);
};

// 댓글 작성
export const fetchCommentWrite = async (postId, data) => {
  return await authenticated.post(`post/${postId}/comment`, data);
};

// 게시글 수정
export const fetchPostUpdate = async (postId, data) => {
  return await authenticated.put(`post/${postId}`, data);
};

// 게시글 삭제
export const fetchPostDelete = async (postId) => {
  return await authenticated.delete(`post/${postId}`);
};

// 일정 보내기

export const fetchTodoWrite = async (data) => {
  return await authenticated.post('todo', data);
};

// 일정 리스트 받아오기

export const fetchTodoList = async () => {
  return await authenticated.get('todo/list');
};

// 강아지 정보 등록하기

export const fetchPuppyWrite = async (data) => {
  return await authenticated.post('puppy', data);
};

// 강아지 이미지 등록
export const fetchPuppyImageWrite = async (data) => {
  return await authenticated.post('puppy/img', data);
};

// 미션 이미지 등록
export const fetchMissionWrite = async (data) => {
  return await authenticated.post('add', data);
};

export const fetchPuppyList = async () => {
  return await authenticated.get(`mypage/puppy/${localStorage.getItem('puppy_info')}`);
};

//게시글 받아오기(정렬된)
export const fetchPostGetByParam = async (sort, page) => {
  return await authenticated.get(`post/list/${sort}?page=${page}&size=6`);
};

//글쓰기
export const fetchPostWrite = async (data) => {
  return await authenticated.post('post/', data);
};

//게시글 검색 결과로 받아오기
export const fetchPostWithSearch = async (data, page) => {
  return await authenticated.get(`post/list/search?keyword=${data}&page=${page}&size=6`);
};

export const fetchPostWithTag = async (tag, page) => {
  return await authenticated.get(`post/list/search/tag/${tag}?page=${page}&size=6`);
};

// 미션 히스토리 받아오기
export const fetchMissionList = async () => {
  return await authenticated.get('mission/calendar/list');
};

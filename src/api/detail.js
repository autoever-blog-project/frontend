import { authenticated } from './axiosInstance';

// 포스트 상세페이지
export const fetchPostDetail = async () => {
  return await authenticated.get('url');
};

// 좋아요 기능
export const fetchLiked = async () => {
  console.log('hi');
  return await authenticated.post('');
};

// 댓글 작성
export const fetchCommentWrite = async () => {
  return await authenticated.post('url', 'data');
};

// 게시글 수정
export const fetchPostUpdate = async () => {
  return await authenticated.post('url', 'postId');
};

// 게시글 삭제
export const fetchPostDelete = async () => {
  return await authenticated.post('url', 'postId');
};

// 미션 리스트 데이터
export const fetchTodoList = async () => {
  return await authenticated.get('mission/calendar/list');
};

// 일정 보내기

export const fetchTodoWrite = async (data) => {
  return await authenticated.post('todo/', data);
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

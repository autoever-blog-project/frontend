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
  return await authenticated.post('mission/img', data);
};

export const fetchPuppyList = async () => {
  return await authenticated.get(`mypage/puppy/${localStorage.getItem('puppy_info')}`);
};

import { authenticated } from './axiosInstance';

// 포스트 상세페이지
export const fetchPostDetail = async (postId) => {
  return await authenticated.get(`post/${1}`);
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

// 미션 리스트 데이터
export const fetchTodoList = async () => {
  return await authenticated.get('mission/calendar/list');
};

// 일정 보내기

export const fetchTodoWrite = async (data) => {
  return await authenticated.post('todo/', data);
};

//게시글 전부 받아오기
export const fetchPostGetAll = async () => {
  return await authenticated.get('post/list');
};

export const fetchPostWrite = async (data) => {
  return await authenticated.post('post/', data);
};

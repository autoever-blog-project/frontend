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

export const fetchTodoList = async () => {
  return await authenticated.get('mission/calendar/list');
};

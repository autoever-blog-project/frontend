import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchLiked, fetchPostDetail } from '../api/detail';

export const usePostDetailInfo = () => {
  const { data } = useQuery('asdf', fetchPostDetail);
  return data?.data;
};

export const useLikedMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchLiked,
    onMutate: async (postId) => {
      // 요청 보내는도중 새로운 요청이 들어왔을 때 기존 요청 취소
      await queryClient.cancelQueries('쿼리키');

      // 요청 실패시 이전 데이터값을 적용해야 하므로 이전 값 가져오기
      const previousLiked = queryClient.getQueriesData('쿼리키');

      // 새로운 상태 업데이트
      queryClient.setQueryData('쿼리키', (old) => {
        if (!old) return;
        return {
          ...old,
          likeCount: old.isLiked ? old.likeCount - 1 : old.likeCount + 1,
          isLiked: !old.isLiked,
        };
      });

      return { previousLiked };
    },
    // 실패시 이전 상태로 돌아감
    onError: (err, userId, context) => {
      queryClient.setQueryData('쿼리키', context.previousLiked);
    },
    // 데이터 동기화
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: '쿼리키' });
    },
  });
};

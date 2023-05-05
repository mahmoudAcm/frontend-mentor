import { useAppSelector } from '@/src/store';

export default function useCommentsOrRepliesSelector() {
  return useAppSelector(state => state.commentsOrReplies);
}

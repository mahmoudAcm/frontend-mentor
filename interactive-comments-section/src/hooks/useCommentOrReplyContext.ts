import { useContext } from 'react';
import { CommentOrReplayContext } from '@/src/contexts/CommentOrReplayContext';

export default function useCommentOrReplyContext() {
  return useContext(CommentOrReplayContext)!;
}

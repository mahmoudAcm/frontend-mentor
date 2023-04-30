import data from '../../../data.json';
import { Reply } from '@/src/types';

export function getComments() {
  return data.comments;
}

export function getReplies(parentComment: string) {
  const replies = data.replies as unknown as Record<string, Reply>;
  return replies[parentComment] ?? [];
}

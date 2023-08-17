import { useContext } from 'react';
import { TodosContext } from '@/src/contexts/TodosContext';

export default function useTodosContext() {
  return useContext(TodosContext)!;
}

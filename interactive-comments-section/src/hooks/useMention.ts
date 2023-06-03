import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useUsesSelector from '@/src/hooks/useUsersSelector';
import api from '@/src/axios';
import { AxiosError } from 'axios';
import useAuthContext from '@/src/hooks/useAuthContext';

const regExp = /^(@|@[a-z][a-z\d-_]{0,20})$/gi;

export default function useMention() {
  const lastPos = useRef(-1);
  const inputRef = useRef<HTMLTextAreaElement>();
  const timeoutRef = useRef<any>(null);
  const timeout2Ref = useRef<any>(null);
  const activeItemRef = useRef(0);
  const [activeItem, setActiveItem] = useState(0);
  const [username, setUsername] = useState('');
  const [fetchedUsers, setFetchedUsers] = useState<typeof users>([]);
  const [fetchingUsers, setFetchingUsers] = useState(false);
  const { users } = useUsesSelector();
  const { logout } = useAuthContext();

  activeItemRef.current = activeItem;

  const loadUsersState = useCallback((state: boolean) => {
    if (timeout2Ref.current !== null) clearTimeout(timeout2Ref.current);
    timeout2Ref.current = setTimeout(() => {
      setFetchingUsers(state);
    }, 500);
  }, []);

  const mapUsersToMention = useCallback((__users: typeof users) => {
    return __users.map(user => '@' + user.username);
  }, []);

  const filteredOptions = useMemo(() => {
    return [...mapUsersToMention(users), ...mapUsersToMention(fetchedUsers)].filter(
      mention => mention.toLowerCase().indexOf(username.toLowerCase()) !== -1
    );
  }, [mapUsersToMention, fetchedUsers, username, users]);

  const onClickAway = useCallback(() => {
    lastPos.current = -1;
    setUsername('');
    setActiveItem(0);
  }, []);

  const getUsers = useCallback(
    (username: string) => {
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);

      const filteredOptions = mapUsersToMention(users).filter(
        mention => mention.toLowerCase().indexOf(username.toLowerCase()) !== -1
      );
      if (filteredOptions.length) return;
      timeoutRef.current = setTimeout(() => {
        loadUsersState(true);
        api
          .get<typeof users>('/users?limit=20&username=' + username)
          .then(response => {
            setFetchedUsers(response.data);
          })
          .catch(error => {
            console.log(error);
            if (error instanceof AxiosError) {
              if (error.response?.status === 401) logout();
            }
          })
          .finally(() => {
            clearTimeout(timeoutRef.current);
            loadUsersState(false);
          });
      }, 300);
    },
    [mapUsersToMention, users, logout, loadUsersState]
  );

  const handleChange = useCallback(() => {
    if (!inputRef.current) return;
    const input = inputRef.current;
    console.log(input.value, lastPos.current, input.selectionStart);
    const username = input.value.slice(lastPos.current, input.selectionStart);
    if (lastPos.current !== -1 && username.match(regExp)) {
      setUsername(username);
      getUsers(username);
    } else onClickAway();
  }, [getUsers, onClickAway]);

  const onClick = useCallback(() => {
    if (!inputRef.current) return;
    setActiveItem(0);
    const input = inputRef.current!;
    let caretPos = input.selectionStart;
    if (caretPos <= input.value.length) {
      const maxTokenLength = 20;
      const startIdx = Math.max(0, caretPos - maxTokenLength);
      const token = input.value.slice(startIdx, caretPos);

      const atIndex = token.lastIndexOf('@');
      if (atIndex !== -1) {
        lastPos.current = startIdx + atIndex;
      }

      const username = token.slice(Math.max(0, atIndex));
      const matched = username.match(regExp);
      if (matched) {
        setUsername(username);
      } else {
        onClickAway();
      }
    }
  }, [onClickAway]);

  const onSelect = useCallback(
    (mention: string) => () => {
      if (inputRef.current && lastPos.current !== -1) {
        const input = inputRef.current!;
        input.value =
          input.value.substring(0, lastPos.current) +
          mention +
          ' ' +
          input.value.substring(lastPos.current + username.length);
        input.selectionStart = lastPos.current + mention.length + 1;
        input.selectionEnd = lastPos.current + mention.length + 1;
        input.focus();
      }
      onClickAway();
      console.log('mentioned', mention);
    },
    [username.length, onClickAway]
  );

  const handleKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Enter' && lastPos.current !== -1 && filteredOptions.length) {
        evt.preventDefault();
        onSelect(filteredOptions[activeItemRef.current])();
      } else if (evt.key === 'Escape') {
        onClickAway();
      } else if (evt.key === '@') {
        lastPos.current = inputRef.current?.selectionStart ?? 0;
      } else if ((evt.key === 'ArrowUp' || evt.key === 'ArrowDown') && lastPos.current !== -1) {
        evt.preventDefault();
        if (evt.key === 'ArrowUp')
          setActiveItem(count => (count - 1 + filteredOptions.length) % filteredOptions.length);
        else setActiveItem(count => (count + 1 + filteredOptions.length) % filteredOptions.length);
      } else if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight') {
        onClickAway();
      }
    },
    [onSelect, onClickAway, filteredOptions]
  );

  useEffect(() => {
    return () => {
      if (timeout2Ref.current !== null) clearTimeout(timeout2Ref.current);
      if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    inputRef,
    activeItem: activeItem % filteredOptions.length,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onSelect,
    onClickAway,
    onClick,
    filteredOptions: username ? filteredOptions : [],
    fetchingUsers
  };
}

export type Mention = ReturnType<typeof useMention>;

import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';
import { cleanExpression, isValidExpression } from '../libs/expression';

const removeWhiteSpaces = (str: string) => str.replace(/\s/g, '');

export const useKeyboardEvent = (
  scope: MutableRefObject<HTMLDivElement | undefined>,
  handleKey: (key: string) => void,
  onDel: () => void,
  onReset: () => void,
  onEquals: () => void
) => {
  useEffect(() => {
    const onKeyDown = (evt: KeyboardEvent) => {
      if (!scope.current) return;
      const keys: NodeListOf<HTMLButtonElement> = scope.current!.querySelectorAll('[value]');
      if (evt.key === '=' || evt.key === 'Enter') {
        onEquals();
        evt.preventDefault();
      }

      if (evt.key === 'Backspace') {
        onDel();
        evt.preventDefault();
      }

      if (evt.key === 'Delete') {
        onReset();
        evt.preventDefault();
      }

      //to add active effect to the pressed button
      keys.forEach(key => {
        if (key.value === evt.key || (evt.key === 'Enter' && key.value === '=')) {
          key.classList.add('active');
          if (isValidExpression(key.value)) handleKey(key.value);
        }
        key.addEventListener('transitionend', () => {
          key.classList.remove('active');
        });
      });
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);
};

export const usePasteEvent = (
  onEquals: (result: string) => void,
  setExpression: Dispatch<SetStateAction<string>>,
  isEqualsFired: MutableRefObject<boolean>
) => {
  useEffect(() => {
    const onPaste = (evt: ClipboardEvent) => {
      const copied_data = evt.clipboardData?.getData('text');
      if (copied_data) {
        if (!isValidExpression(copied_data)) {
          onEquals('Invalid Input');
        } else {
          const expression = cleanExpression(removeWhiteSpaces(copied_data));
          setExpression(isEqualsFired.current ? expression('') : expression);
          isEqualsFired.current = false;
        }
      }
    };

    document.addEventListener('paste', onPaste);
    return () => {
      document.removeEventListener('paste', onPaste);
    };
  }, []);
};

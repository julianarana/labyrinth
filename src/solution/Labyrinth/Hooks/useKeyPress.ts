import { useEffect, useState } from 'react';
import { Movement } from '../types';

export const useKeyPressed = (targetValue: Movement): boolean => {
  const [state, setState] = useState<boolean>(false);

  const keyDownHandler = (event: KeyboardEvent): void => {
    if (event.key === targetValue) {
      setState(true);
    }
  };
  const keyUpHandler = (event: KeyboardEvent): any => {
    if (event.key === targetValue) {
      setState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);

  return state;
};

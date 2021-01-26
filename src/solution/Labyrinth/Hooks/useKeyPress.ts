import { useEffect, useState } from 'react';

export const useKeyPressed = (targetValue: number): boolean => {
  const [state, setState] = useState<boolean>(false);

  const keyDownHandler = (event: KeyboardEvent): void => {
    //console.log(event, event.keyCode, event.charCode)
    if (event.keyCode === targetValue) {
      setState(true);
    }
  };
  const keyUpHandler = (event: KeyboardEvent): any => {
    if (event.keyCode === targetValue) {
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

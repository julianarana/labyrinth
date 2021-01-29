import { useEffect, useState } from 'react';
import { Movement, MovementType } from '../types';
import { useKeyPressed } from './useKeyPress';

export const useArrowKeys = (): MovementType => {
  const [lastPressed, setLastPressed] = useState<Movement>(null);

  const downPressed = useKeyPressed(Movement.DOWN);
  const upPressed = useKeyPressed(Movement.UP);
  const leftPressed = useKeyPressed(Movement.LEFT);
  const rightPressed = useKeyPressed(Movement.RIGHT);

  useEffect(() => {
    if (!downPressed && lastPressed === Movement.DOWN) {
      setLastPressed(null);
    } else if (downPressed && lastPressed !== Movement.DOWN) {
      setLastPressed(Movement.DOWN);
    }
  }, [downPressed]);

  useEffect(() => {
    if (!upPressed && lastPressed === Movement.UP) {
      setLastPressed(null);
    } else if (upPressed && lastPressed !== Movement.UP) {
      setLastPressed(Movement.UP);
    }
  }, [upPressed]);

  useEffect(() => {
    if (!leftPressed && lastPressed === Movement.LEFT) {
      setLastPressed(null);
    } else if (leftPressed && lastPressed !== Movement.LEFT) {
      setLastPressed(Movement.LEFT);
    }
  }, [leftPressed]);

  useEffect(() => {
    if (!rightPressed && lastPressed === Movement.RIGHT) {
      setLastPressed(null);
    } else if (rightPressed && lastPressed !== Movement.RIGHT) {
      setLastPressed(Movement.RIGHT);
    }
  }, [rightPressed]);

  return lastPressed;
};

import { useEffect, useState } from 'react';
import { Movement, MovementType } from '../types';
import { useKeyPressed } from './useKeyPress';

export const DOWN_KEY = 40;
export const UP_KEY = 38;
export const LEFT_KEY = 37;
export const RIGHT_KEY = 39;

export const useArrowKeys = (): MovementType => {
  const [lastPressed, setLastPressed] = useState<Movement>(null);

  const downPressed = useKeyPressed(DOWN_KEY);
  const upPressed = useKeyPressed(UP_KEY);
  const leftPressed = useKeyPressed(LEFT_KEY);
  const rightPressed = useKeyPressed(RIGHT_KEY);

  useEffect(() => {
    if (!downPressed && lastPressed === Movement.DOWN) {
      setLastPressed(null);
    } else if (downPressed && lastPressed !== DOWN_KEY) {
      setLastPressed(Movement.DOWN);
    }
  }, [downPressed]);

  useEffect(() => {
    if (!upPressed && lastPressed === Movement.UP) {
      setLastPressed(null);
    } else if (upPressed && lastPressed !== UP_KEY) {
      setLastPressed(Movement.UP);
    }
  }, [upPressed]);

  useEffect(() => {
    if (!leftPressed && lastPressed === Movement.LEFT) {
      setLastPressed(null);
    } else if (leftPressed && lastPressed !== UP_KEY) {
      setLastPressed(Movement.LEFT);
    }
  }, [leftPressed]);

  useEffect(() => {
    if (!rightPressed && lastPressed === Movement.RIGHT) {
      setLastPressed(null);
    } else if (rightPressed && lastPressed !== UP_KEY) {
      setLastPressed(Movement.RIGHT);
    }
  }, [rightPressed]);

  return lastPressed;
};

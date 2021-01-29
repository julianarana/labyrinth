import { useMemo, useState } from 'react';
import { AvailableMatrix, Movement, MovementType, Position } from '../types';

interface LabyrinthStoreState {
  cols: number;
  move: (movement: Movement) => void;
  reset: () => void;
  rows: number;
  state: LabyrinthState;
}

interface LabyrinthState {
  position: Position;
  movements: number;
  lost: boolean;
  won: boolean;
}

const INITIAL_STATE: LabyrinthState = {
  position: [0, 0],
  movements: 0,
  lost: false,
  won: false,
};

export const useLabyrinthState = (
  startingPosition: Position,
  availableCells: AvailableMatrix,
  moveLimit: number = Infinity,
  targetPosition: Position
): LabyrinthStoreState => {
  const [state, setState] = useState<LabyrinthState>({
    ...INITIAL_STATE,
    position: startingPosition,
  });

  const cols = useMemo(() => availableCells.length, [availableCells]);
  const rows = useMemo(
    () => (availableCells.length > 0 ? availableCells[0].length : 0),
    [availableCells]
  );

  const setPosition = (position?: Position): void => {
    if (
      !(state.lost || state.won) &&
      isValidPosition(position, availableCells) &&
      !isSamePosition(position, state.position)
    ) {
      const won = hasWon(position, targetPosition);
      const lost = hasLost(state.movements, moveLimit, won);
      setState((oldState) => ({
        ...oldState,
        position,
        movements: oldState.movements + 1,
        won,
        lost,
      }));
    }
  };

  const move = (movement: MovementType): void => {
    let newPosition: Position;
    if (movement === null) {
      return;
    }
    if (movement === Movement.UP && state.position[0] > 0) {
      newPosition = [state.position[0] - 1, state.position[1]];
    } else if (movement === Movement.DOWN) {
      newPosition = [state.position[0] + 1, state.position[1]];
    } else if (movement === Movement.RIGHT) {
      newPosition = [state.position[0], state.position[1] + 1];
    } else if (movement === Movement.LEFT && state.position[1] > 0) {
      newPosition = [state.position[0], state.position[1] - 1];
    }
    setPosition(newPosition);
  };

  const reset = (): void => {
    setState(INITIAL_STATE);
  };

  return { cols, rows, state, move, reset };
};

const isValidPosition = (
  position: Position,
  availableCells: AvailableMatrix
): boolean =>
  !!position &&
  position[0] >= 0 &&
  position[1] >= 0 &&
  position[0] < availableCells.length &&
  position[1] < availableCells[position[0]].length &&
  !!availableCells[position[0]][position[1]];

const isSamePosition = (
  position: Position,
  comparePosition: Position
): boolean =>
  position &&
  position[0] === comparePosition[0] &&
  position[1] === comparePosition[1];

const hasWon = (position: Position, winningPosition: Position): boolean =>
  isSamePosition(position, winningPosition);

const hasLost = (
  currentMovements: number,
  maxMovements: number,
  won: boolean
): boolean => !won && currentMovements >= maxMovements -1;

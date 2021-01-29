import React, { ReactElement, useEffect, useMemo } from 'react';
import { Board } from './Components';
import { AvailableMatrix, Position } from './types';
import classNames from 'classnames/bind';
import styles from './labyrinth.module.scss';
import { useArrowKeys } from './Hooks/useArrowKeys';
import { useLabyrinthState } from './State';

const cx = classNames.bind(styles);

/** keep, add, change or remove types/props */

export interface Props {
  targetPosition: Position;
  availableCells: AvailableMatrix;
  startingPosition: Position;
  moveLimit?: number;
  cellSize?: number;
  shadow?: boolean;
  visibleCells?: number;
}

const Labyrinth = ({
  cellSize,
  availableCells,
  moveLimit,
  startingPosition,
  targetPosition,
}: Props): ReactElement => {
  const { state, move } = useLabyrinthState(
    startingPosition,
    availableCells,
    moveLimit,
    targetPosition
  );
  const { movements, position, won, lost } = state;
  const cols = useMemo(() => availableCells.length, [availableCells]);
  const rows = useMemo(
    () => (availableCells.length > 0 ? availableCells[0].length : 0),
    [availableCells]
  );

  const arrowKey = useArrowKeys();

  useEffect(() => {
    move(arrowKey);
  }, [arrowKey]);

  return (
    <div>
      <Board
        cellSize={cellSize}
        availableCells={availableCells}
        currentPosition={position}
        targetPosition={targetPosition}
        startingPosition={startingPosition}
      />
      <div className={cx('info')}>
        <div className={cx('info__status')}>
          {lost && <div data-testid="lose-message" className={cx('info__status__lost')}>
            You lost :(
          </div>}
          {won && <div data-testid="win-message" className={cx('info__status__won')}>
            You won :)
          </div>}
        </div>
        <div data-testid="moves-message" className={cx('infor__moves')}>
          Moves left: {moveLimit - movements}
        </div>
      </div>
      <div data-testid="position-ball">position ball</div>
      <div data-testid="cell">cell</div>
    </div>
  );
};

export default Labyrinth;

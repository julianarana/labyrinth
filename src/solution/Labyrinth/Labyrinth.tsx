import React, { ReactElement, useEffect, useState } from 'react';
import { Board } from './Components';
import { AvailableMatrix, Position } from './types';
import classNames from 'classnames/bind';
import styles from './labyrinth.module.scss';
import { useArrowKeys } from './Hooks/useArrowKeys';
import { useLabyrinthState } from './State';
import { Button } from './Components/Button';

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
  const { state, move, reset, toggleFog } = useLabyrinthState(
    startingPosition,
    availableCells,
    moveLimit,
    targetPosition
  );
  const { movements, position, won, lost, displayFog } = state;

  const arrowKey = useArrowKeys();

  useEffect(() => {
    move(arrowKey);
  }, [arrowKey]);

  return (
    <div className={cx('labyrinth')}>
      <Board
        availableCells={availableCells}
        cellSize={cellSize}
        currentPosition={position}
        displayFog={displayFog}
        startingPosition={startingPosition}
        targetPosition={targetPosition}
      />
      <div className={cx('info')}>
        <div className={cx('info__status')}>
          {lost && (
            <div
              data-testid="lose-message"
              className={cx('info__status__lost')}
            >
              You lost :(
            </div>
          )}
          {won && (
            <div data-testid="win-message" className={cx('info__status__won')}>
              You won :)
            </div>
          )}
        </div>
        <div data-testid="moves-message" className={cx('info__moves')}>
          Moves left: {moveLimit - movements}
        </div>
      </div>
      <div className={cx('buttons')}>
        <Button onClick={toggleFog}>
          {displayFog ? 'Hide' : 'Display'} Fog
        </Button>
        <Button onClick={reset}>Reset Game</Button>
      </div>
    </div>
  );
};

export default Labyrinth;

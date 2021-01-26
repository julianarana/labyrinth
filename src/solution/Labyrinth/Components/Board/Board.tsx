import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './board.module.scss';
import { Cell } from '../Cell';
import {
  AvailableCell,
  AvailableMatrix,
  AvailableRow,
  Position,
} from '../../types';

const cx = classNames.bind(styles);

interface BoardProps {
  availableCells: AvailableMatrix;
  cellSize: number;
  currentPosition: Position;
  startingPosition: Position;
  targetPosition: Position;
}

const Board = ({
  availableCells,
  cellSize,
  currentPosition,
  startingPosition,
  targetPosition
}: BoardProps): ReactElement => {
  return (
    <div className={cx('board')}>
      {availableCells.map(
        (row: AvailableRow, index: number): ReactNode => (
          <>
            {row.map(
              (cell: AvailableCell, cellIndex: number): ReactNode => {
                return (
                  <div key={`${index}-${cellIndex}`}>
                    <Cell
                      size={cellSize}
                      available={cell}
                      isToken={
                        index === currentPosition[0] &&
                        cellIndex === currentPosition[1]
                      }
                      isTarget={index === targetPosition[0] && cellIndex === targetPosition[1]}
                      isStarting={index ===startingPosition[0] && cellIndex === startingPosition[1]}
                    />
                  </div>
                );
              }
            )}
          </>
        )
      )}
    </div>
  );
};

export default Board;

import React, { ReactElement, ReactNode, useMemo } from 'react';
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

export interface BoardProps {
  availableCells: AvailableMatrix;
  cellSize: number;
  currentPosition: Position;
  displayFog?: boolean;
  startingPosition: Position;
  targetPosition: Position;
}

const Board = ({
  availableCells,
  cellSize,
  currentPosition,
  displayFog,
  startingPosition,
  targetPosition,
}: BoardProps): ReactElement => {
  const fogPosition: [string, string] = useMemo(() => {
    if (!displayFog) {
      return ['0', '0'];
    }
    const width = availableCells.length;
    const height = availableCells[0].length;
    const y = `${(currentPosition[0] * 100) / width - 95}%`;
    const x = `${(currentPosition[1] * 100) / height - 95}%`;
    return [x, y];
  }, [currentPosition, availableCells, displayFog]);

  return (
    <div
      className={cx('board')}
      style={{
        gridTemplateColumns: `${cellSize}px repeat(${
          availableCells[0].length - 1
        }, 1fr)`,
      }}
    >
      {availableCells.map(
        (row: AvailableRow, index: number): ReactNode => (
          <React.Fragment key={index}>
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
                      isTarget={
                        index === targetPosition[0] &&
                        cellIndex === targetPosition[1]
                      }
                      isStarting={
                        index === startingPosition[0] &&
                        cellIndex === startingPosition[1]
                      }
                    />
                  </div>
                );
              }
            )}
          </React.Fragment>
        )
      )}
      {displayFog && (
        <div
          data-testid="fog"
          className={styles.board__fog}
          style={{ top: fogPosition[1], left: fogPosition[0] }}
        ></div>
      )}
    </div>
  );
};

export default Board;

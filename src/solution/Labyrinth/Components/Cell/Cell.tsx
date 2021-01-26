import React, { ReactElement } from 'react';

import classNames from 'classnames/bind';

import styles from './cell.module.scss';

const cx = classNames.bind(styles);

interface CellProps {
  available: 0 | 1;
  isStarting: boolean;
  isTarget: boolean;
  isToken: boolean;
  size?: number;
}

const Cell = ({
  available,
  size,
  isStarting,
  isTarget,
  isToken,
}: CellProps): ReactElement => {
  return (
    <div
      className={cx('cell', { available, target: isTarget, start: isStarting })}
    >
      {isToken && <div className={cx('token')}></div>}
    </div>
  );
};

export default Cell;

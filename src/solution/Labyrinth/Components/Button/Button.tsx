import React, { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
interface ButtonProps {
  onClick: (event?: React.MouseEvent) => void;
}

export const Button = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>): ReactElement => {
  return (
    <button className={cx('button')} onClick={onClick}>
      {children}
    </button>
  );
};

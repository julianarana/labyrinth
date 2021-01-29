import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Labyrinth } from './solution/Labyrinth';
import { Props } from './solution/Labyrinth/Labyrinth';
import { availableCellsMock1 } from './solution/Labyrinth/Mocks/availableCells';

describe('Labyrinth', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      targetPosition: [4, 4],
      availableCells: availableCellsMock1,
      startingPosition: [0, 0],
      moveLimit: 10,
      cellSize: 30,
    };
  });

  it('should win', () => {
    const { container, getByTestId, queryByTestId } = render(
      <Labyrinth {...props} />
    );
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyUp(container, { key: 'ArrowRight' });
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyUp(container, { key: 'ArrowRight' });
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    fireEvent.keyUp(container, { key: 'ArrowDown' });
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    fireEvent.keyUp(container, { key: 'ArrowDown' });
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    fireEvent.keyUp(container, { key: 'ArrowDown' });
    fireEvent.keyDown(container, { key: 'ArrowDown' });
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyUp(container, { key: 'ArrowDown' });
    fireEvent.keyUp(container, { key: 'ArrowRight' });
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyUp(container, { key: 'ArrowRight' });
    expect(getByTestId('moves-message').textContent).toEqual('Moves left: 2');
    expect(queryByTestId('win-message')).toBeTruthy();
    expect(queryByTestId('lose-message')).not.toBeTruthy();
  });

  it('should lose', () => {
    const { container, getByTestId, queryByTestId } = render(
      <Labyrinth {...props} moveLimit={2} />
    );
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyUp(container, { key: 'ArrowRight' });
    fireEvent.keyDown(container, { key: 'ArrowRight' });
    fireEvent.keyUp(container, { key: 'ArrowRight' });
    expect(getByTestId('moves-message').textContent).toEqual('Moves left: 0');
    expect(queryByTestId('win-message')).not.toBeTruthy();
    expect(queryByTestId('lose-message')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import Board, { BoardProps } from './Board';
import {
  availableCellsMock1,
  correctAvailableMock1,
  correctNotAvailableMock1,
} from '../../Mocks/availableCells';

fdescribe('Board Component', () => {
  let props: BoardProps;

  const targetCell: number = 24;

  beforeEach(() => {
    props = {
      availableCells: availableCellsMock1,
      cellSize: 50,
      currentPosition: [0, 0],
      startingPosition: [0, 0],
      targetPosition: [4, 4],
    };
  });

  it(`should display all the cells on the board without fog`, () => {
    const { getAllByTestId, queryByTestId } = render(<Board {...props} />);
    expect(getAllByTestId('cell')).toHaveLength(25);
    expect(queryByTestId('fog')).toBeFalsy();
  });

  it(`should display the fog`, () => {
    const fogProps: BoardProps = {
      ...props,
      displayFog: true,
    };
    const { queryByTestId } = render(<Board {...fogProps} />);
    expect(queryByTestId('fog')).toBeTruthy();
  });

  it(`should mark the correct starting cell`, () => {
    const { getAllByTestId } = render(<Board {...props} />);
    const cells = getAllByTestId('cell');

    cells.forEach((cell, index) => {
      if (index !== 0) {
        expect(cell).not.toHaveClass('start');
      } else {
        expect(cell).toHaveClass('start');
      }
    });
  });

  it(`should mark the correct ending cell`, () => {
    const { getAllByTestId } = render(<Board {...props} />);
    const cells = getAllByTestId('cell');

    cells.forEach((cell, index) => {
      if (index !== targetCell) {
        expect(cell).not.toHaveClass('target');
      } else {
        expect(cell).toHaveClass('target');
      }
    });
  });

  it(`should the correct available cells`, () => {
    const { getAllByTestId } = render(<Board {...props} />);
    const cells = getAllByTestId('cell');

    cells.forEach((cell, index) => {
      const isAvailable = correctAvailableMock1.indexOf(index) !== -1;
      if (!isAvailable) {
        expect(cell).not.toHaveClass('available');
      } else {
        expect(cell).toHaveClass('available');
      }
    });
  });

  it(`should the correct not available cells`, () => {
    const { getAllByTestId } = render(<Board {...props} />);
    const cells = getAllByTestId('cell');

    cells.forEach((cell, index) => {
      const isNotAvailable = correctNotAvailableMock1.indexOf(index) !== -1;
      if (isNotAvailable) {
        expect(cell).not.toHaveClass('available');
      } else {
        expect(cell).toHaveClass('available');
      }
    });
  });
});

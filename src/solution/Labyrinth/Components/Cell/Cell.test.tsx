import React from 'react';

import { render } from '@testing-library/react';
import { Cell } from './';

describe('Cell Component', () => {
  beforeEach(() => {});

  it(`should show the token`, () => {
    const props = {
      available: 1 as 0 | 1,
      isStarting: true,
      isTarget: false,
      isToken: true,
    };
    const { getByTestId } = render(<Cell {...props} />);
    expect(getByTestId('token')).toBeTruthy();
  });

  it(`shouldn't show the token`, () => {
    const props = {
      available: 1 as 0 | 1,
      isStarting: true,
      isTarget: false,
      isToken: false,
    };
    const { queryByTestId } = render(<Cell {...props} />);
    expect(queryByTestId('token')).toBeFalsy();
  });

  it(`should mark as starting cell`, () => {
    const props = {
      available: 1 as 0 | 1,
      isStarting: true,
      isTarget: false,
      isToken: true,
    };
    const { getByTestId } = render(<Cell {...props} />);
    expect(getByTestId('cell')).toHaveClass('start');
  });

  it(`should mark as target cell with no token`, () => {
    const props = {
      available: 1 as 0 | 1,
      isStarting: false,
      isTarget: true,
      isToken: false,
    };
    const { getByTestId, } = render(
      <Cell {...props} />
    );
    expect(getByTestId('cell')).toHaveClass('target');
  });

  it(`should mark as target cell and have a token`, () => {
    const props = {
      available: 1 as 0 | 1,
      isStarting: false,
      isTarget: true,
      isToken: true,
    };
    const { getByTestId, } = render(
      <Cell {...props} />
    );
    expect(getByTestId('cell')).toHaveClass('target');
    expect(getByTestId('token')).toBeTruthy();
  });
});

import React from 'react';

import { Solution } from './solution';
import { AvailableMatrix } from './solution/Labyrinth/types';

/*const availableCells: AvailableMatrix = [
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
];*/

const availableCells: AvailableMatrix = [
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
]

function App() {
  return (
    <Solution
      targetPosition={[4, 4]}
      availableCells={availableCells}
      startingPosition={[0,0]}
      moveLimit={200}
      cellSize={30}
    />
  );
}

export default App;

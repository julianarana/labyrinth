import { AvailableMatrix } from '../types';

export const availableCellsMock1: AvailableMatrix = [
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1],
];

export const correctAvailableMock1: number[] = [
  0,
  1,
  2,
  3,
  4,
  7,
  12,
  15,
  16,
  17,
  22,
  23,
  24,
];

export const correctNotAvailableMock1: number[] = [
  5,
  6,
  8,
  9,
  10,
  11,
  13,
  14,
  18,
  19,
  20,
  21,
];

export const availableCellsMock2: AvailableMatrix = [
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
];

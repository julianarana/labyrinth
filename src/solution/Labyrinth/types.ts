export type AvailableCell = 0 | 1;

export type AvailableRow = AvailableCell[];

export type AvailableMatrix = AvailableRow[];

export type Position = [/** row */ number, /** col */ number];

export type MovementType = Movement | null;

export enum Movement {
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

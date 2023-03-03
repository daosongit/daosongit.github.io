export const BOARD_SIZE = 10;

export const BOARD = Array<number[]>(BOARD_SIZE)
  .fill(Array(BOARD_SIZE))
  .fill(Array(BOARD_SIZE).fill(0));

export const SPEED = [700, 500, 300, 200, 100];

export const MOVE_DIRECTION = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  right: 'ArrowRight',
  left: 'ArrowLeft',
};

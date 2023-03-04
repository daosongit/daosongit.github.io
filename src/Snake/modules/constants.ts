export const BOARD_SIZE = 10;

export const BOARD = Array<number[]>(BOARD_SIZE)
  .fill(Array(BOARD_SIZE))
  .fill(Array(BOARD_SIZE).fill(0));

export const SPEED = {
  Easy: 300,
  Normal: 200,
  Hard: 100,
  Insane: 50,
};

export const MOVE_DIRECTION = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  right: 'ArrowRight',
  left: 'ArrowLeft',
};

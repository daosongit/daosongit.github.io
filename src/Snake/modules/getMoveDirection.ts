import { MOVE_DIRECTION } from './constants';

const moveDirection = (direction: string) => {
  let move = [] as number[];
  switch (direction) {
    case MOVE_DIRECTION.up:
      move = [-1, 0];
      break;
    case MOVE_DIRECTION.down:
      move = [1, 0];
      break;
    case MOVE_DIRECTION.right:
      move = [0, 1];
      break;
    case MOVE_DIRECTION.left:
      move = [0, -1];
      break;
    default:
      break;
  }
  return move;
};

export default moveDirection;

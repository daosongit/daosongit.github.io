import { BOARD_SIZE } from '../constants';

export default function checkBorderLine(position: number) {
  switch (true) {
    case position >= BOARD_SIZE:
      return 0;
    case position < 0:
      return BOARD_SIZE - 1;
    default:
      return position;
  }
}

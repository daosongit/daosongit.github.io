export default function isSnakeCannibal(snake: number[][]) {
  if (snake.length) {
    // find arrays with same first value
    const buff = [...snake.filter((a) => a[0] === snake[snake.length - 1][0])];
    if (buff.length) {
      // find dublicates
      const buff2 = buff.filter((a) => a[1] === snake[snake.length - 1][1]);
      // if snake has two same arrays then it is eaten yourself
      return buff2.length > 1;
    } else {
      return false;
    }
  }
}

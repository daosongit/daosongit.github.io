import { Box, Button } from '@mui/material';
import { TASKBAR_HEIGHT } from '../Root/TaskBar/TaskBar';
import Board from './Components/Board';
import checkBorderLine from './modules/checkBorderLine';
import getRandomArr from './modules/getRandomArr';
import { useEffect, useState } from 'react';
import getMoveDirection from './modules/getMoveDirection';
import { MOVE_DIRECTION } from './constants';
import { BsFillPauseFill as IcoPause, BsFillPlayFill as IcoPlay } from 'react-icons/bs';

export default function Snake() {
  const [snake, setSnake] = useState([getRandomArr()]);
  const [food, setFood] = useState([1, 1]);
  const [direction, setDirection] = useState<string>(MOVE_DIRECTION.right);
  const [pause, setPause] = useState(true);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (Object.values(MOVE_DIRECTION).includes(e.key)) {
        setDirection(e.key);
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  }, [direction]);

  useEffect(() => {
    if (pause) return;
    const timerID = gameLoop();
    return () => clearTimeout(timerID);
  }, [snake, direction, pause]);

  function gameLoop() {
    const timerId = setTimeout(() => {
      const newSnake = snake;
      const move = getMoveDirection(direction);
      const head = [
        checkBorderLine(newSnake[snake.length - 1][0] + move[0]),
        checkBorderLine(newSnake[snake.length - 1][1] + move[1]),
      ];

      newSnake.push(head);

      // imposible to eat yourself with lenght 3
      if (newSnake.length > 3) {
        // find arrays with same first value
        const buff = [...newSnake.filter((a) => a[0] === newSnake[newSnake.length - 1][0])];
        // find dublicates
        const buff2 = buff.filter((a) => a[1] === newSnake[newSnake.length - 1][1]);
        // if snake has two same arrays then it is eaten yourself
        if (buff2.length > 1) {
          alert('Game Over');
          setSnake([getRandomArr()]);
          setPause(true);
          return;
        }
      }

      let sliceIndex = 1;
      if (head[0] === food[0] && head[1] === food[1]) {
        setFood(getRandomArr());
        sliceIndex = 0;
      }

      setSnake(newSnake.slice(sliceIndex));
    }, 200);
    return timerId;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: `calc(100vh - ${TASKBAR_HEIGHT})`,
        background:
          'linear-gradient(186deg, rgba(35,48,48,1) 0%, rgba(41,40,40,1) 49%, #323328 100%)',
      }}>
      <Button onClick={() => setPause(!pause)} sx={{ borderRadius: '5px' }}>
        {pause ? <IcoPause size={30} color="white" /> : <IcoPlay size={30} color="white" />}
      </Button>
      <Board snake={snake} food={food} />
    </Box>
  );
}

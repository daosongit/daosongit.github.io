// constants
import { TASKBAR_HEIGHT } from '../Root/TaskBar/TaskBar';
import { MOVE_DIRECTION, SPEED } from './modules/constants';
//mui
import { Box, ThemeProvider, useMediaQuery } from '@mui/material';
// react
import { useCallback, useEffect, useRef, useState } from 'react';
//components
import Board from './Components/Board';
import Topbar from './Components/Topbar';
import GameMenu from './Components/GameMenu';
import TopNavigation, { TOPNAV_HEIGHT } from '../Components/TopNavigation';
//modules
import theme from './styles/theme';
import checkBorderLine from './modules/checkBorderLine';
import getRandomArr from './modules/getRandomArr';
import getMoveDirection from './modules/getMoveDirection';
import isSnakeCannibal from './modules/isSnakeCannibal';
import useKeyDownHandler from './hooks/useKeyDownHandler';
import MobileController from './Components/MobileController';

export default function Snake() {
  const [snake, setSnake] = useState([getRandomArr()]);
  const [food, setFood] = useState([1, 1]);
  const prevDirection = useRef<string>(MOVE_DIRECTION.right);
  const [direction, setDirection] = useState<string>(MOVE_DIRECTION.right);
  const [isGameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [snakeSpeed, setSnakeSpeed] = useState(SPEED.Normal);

  const startGame = useCallback((isStarted = true) => setGameStarted(isStarted), []);
  const changeSpeed = useCallback((speed: number) => setSnakeSpeed(speed), []);
  const changeDirection = useCallback((direction: string) => setDirection(direction), []);

  useKeyDownHandler({ direction, changeDirection });

  useEffect(() => {
    if (!isGameStarted) return;
    let speed = snakeSpeed;
    // change direction without timeout
    if (prevDirection.current !== direction) {
      speed = 0;
      prevDirection.current = direction;
    }
    const timerID = gameLoop(speed);
    return () => clearTimeout(timerID);
  }, [snake, direction, isGameStarted]);

  function gameLoop(speed: number) {
    const timerId = setTimeout(() => {
      const newSnake = snake;
      const move = getMoveDirection(direction);
      const head = [
        checkBorderLine(newSnake[snake.length - 1][0] + move[0]),
        checkBorderLine(newSnake[snake.length - 1][1] + move[1]),
      ];

      newSnake.push(head);

      if (isSnakeCannibal(snake)) {
        setSnake([getRandomArr()]);
        setGameStarted(false);
        const storage = Number(localStorage.getItem('score'));
        if (storage && storage < score) {
          localStorage.setItem('score', score.toString());
        }
        setScore(0);
        return;
      }

      let sliceIndex = 1;
      if (head[0] === food[0] && head[1] === food[1]) {
        setFood(getRandomArr());
        setScore((prev) => prev + 1);
        sliceIndex = 0;
      }

      setSnake(newSnake.slice(sliceIndex));
    }, speed);
    return timerId;
  }

  return (
    <ThemeProvider theme={theme}>
      <TopNavigation />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: `calc(100vh - ${TASKBAR_HEIGHT} - ${TOPNAV_HEIGHT})`,
          background:
            'linear-gradient(186deg, rgba(35,48,48,1) 0%, rgba(41,40,40,1) 49%, #323328 100%)',
        }}>
        <Topbar score={score} isGameStarted={isGameStarted} startGame={startGame} />
        <Box
          sx={{
            border: '1px solid white',
            borderRadius: '5px',
            boxShadow: '0px 0px 83px -25px #666565',
          }}>
          {isGameStarted ? (
            <Board snake={snake} food={food} />
          ) : (
            <GameMenu
              score={score}
              speed={snakeSpeed}
              startGame={startGame}
              changeSpeed={changeSpeed}
            />
          )}
        </Box>
        <MobileController changeDirection={changeDirection} />
      </Box>
    </ThemeProvider>
  );
}

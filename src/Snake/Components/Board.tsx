import { Box } from '@mui/material';
import { BOARD } from '../constants';
import useCellSize from '../hooks/useCellSize';

interface BoardProps {
  snake: number[][];
  food: number[];
}

export default function Board({ snake, food }: BoardProps) {
  const CellSize = useCellSize();
  return (
    <>
      {BOARD.map((row, idxR) => (
        <Box key={idxR} display="flex">
          {row.map((cell, idxC) => {
            const styles = { background: 'transparent', borderRadius: '0' };
            const foodSx = styles;
            const snakeSx = styles;
            const isSnake = snake.find((a) => a[0] === idxR && a[1] === idxC);
            const isFood = food[0] === idxR && food[1] === idxC;
            const isHead =
              snake[snake.length - 1][0] === idxR && snake[snake.length - 1][1] === idxC;
            const isTail = snake[0][0] === idxR && snake[0][1] === idxC;
            if (isHead) {
              snakeSx.background = 'white';
              snakeSx.borderRadius = '30%';
            } else if (isTail) {
              snakeSx.background = '#e0dcdc';
              snakeSx.borderRadius = '10%';
            } else if (isSnake) {
              snakeSx.background = 'white';
              snakeSx.borderRadius = '10%';
            }
            if (isFood) {
              foodSx.borderRadius = '30%';
              snakeSx.background = 'green';
            }
            return (
              <Box
                key={idxC}
                sx={{
                  ...foodSx,
                  ...snakeSx,
                  display: 'flex',
                  width: CellSize,
                  height: CellSize,
                }}
              />
            );
          })}
        </Box>
      ))}
    </>
  );
}

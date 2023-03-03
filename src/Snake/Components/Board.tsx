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
            const styles = { backgroundColor: 'transparent', borderRadius: '0' };
            const foodSx = styles;
            const snakeSx = styles;
            const isSnake = snake.find((a) => a[0] === idxR && a[1] === idxC);
            const isFood = food[0] === idxR && food[1] === idxC;
            const isHead =
              snake[snake.length - 1][0] === idxR && snake[snake.length - 1][1] === idxC;
            if (isHead) {
              snakeSx.backgroundColor = 'white';
              snakeSx.borderRadius = '30%';
            } else if (isSnake) {
              snakeSx.backgroundColor = 'white';
            }
            if (isFood) {
              foodSx.backgroundColor = 'green';
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

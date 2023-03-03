import { Box, Button, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { BOARD_SIZE, SPEED } from '../constants';
import useCellSize from '../hooks/useCellSize';

interface GameMenuProps {
  score: number;
  speed: number;
  startGame: () => void;
  changeSpeed: (s: number) => void;
}

export default function GameMenu({ score, startGame, changeSpeed, speed }: GameMenuProps) {
  const [speedValue, setSpeedValue] = useState(speed);
  function handleClick(e: React.MouseEvent<HTMLElement>, speed: string) {
    setSpeedValue(Number(speed));
    changeSpeed(Number(speed));
  }
  const boxSize = BOARD_SIZE * useCellSize();
  const bestScore = localStorage.getItem('score') || 0;
  return (
    <Box sx={{ width: boxSize, height: boxSize, p: '10px' }}>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', mb: '20px' }}>
        Menu
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          textAlign: 'center',
        }}>
        <Typography component="span" variant="body2">
          Best score: {bestScore}
        </Typography>
        <Button onClick={startGame}>{score ? 'Resume' : 'New Game'}</Button>
        <Typography component="span" variant="body2">
          Speed
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={speedValue}
          exclusive
          onChange={handleClick}
          aria-label="Platform"
          sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <ToggleButton value={SPEED.Easy} sx={{ fontSize: '10px' }}>
            Easy
          </ToggleButton>
          <ToggleButton value={SPEED.Normal} sx={{ fontSize: '10px' }}>
            Normal
          </ToggleButton>
          <ToggleButton value={SPEED.Hard} sx={{ fontSize: '10px' }}>
            Hard
          </ToggleButton>
          <ToggleButton value={SPEED.Insane} sx={{ fontSize: '10px' }}>
            Insane
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}

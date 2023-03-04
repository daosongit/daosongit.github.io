import { Box, Button, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { BOARD_SIZE, SPEED } from '../modules/constants';
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
    <Box
      sx={{
        width: boxSize,
        height: boxSize,
        p: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Typography component="h1" variant="h1" sx={{ textAlign: 'center', mb: '30px' }}>
        Menu
      </Typography>
      <Box
        sx={{
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          rowGap: '10px',
        }}>
        <Typography component="span" variant="body1">
          Best score: {bestScore}
        </Typography>
        <Button onClick={startGame} sx={{ my: '20px' }}>
          <Typography component="span" variant="caption">
            {score ? 'Resume' : 'New Game'}
          </Typography>
        </Button>
        <Typography component="span" variant="body1">
          Speed
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={speedValue}
          exclusive
          onChange={handleClick}
          aria-label="Speed"
          sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <ToggleButton value={SPEED.Easy} sx={{ color: '#dddbdb' }}>
            <Typography variant="body2">Easy</Typography>
          </ToggleButton>
          <ToggleButton value={SPEED.Normal} sx={{ color: '#dddbdb' }}>
            <Typography variant="body2">Normal</Typography>
          </ToggleButton>
          <ToggleButton value={SPEED.Hard} sx={{ color: '#dddbdb' }}>
            <Typography variant="body2">Hard</Typography>
          </ToggleButton>
          <ToggleButton value={SPEED.Insane} sx={{ color: '#dddbdb' }}>
            <Typography variant="body2">Insane</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}

import { Box, Button, Typography } from '@mui/material';
import { BOARD_SIZE } from '../constants';
import useCellSize from '../hooks/useCellSize';

interface TopbarProps {
  score: number;
  isGameStarted: boolean;
  startGame: (isStarted: boolean) => void;
}

export default function Topbar({ score, isGameStarted, startGame }: TopbarProps) {
  const width = BOARD_SIZE * useCellSize();
  return (
    <Box
      sx={{
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Typography component="span" variant="body2">
        {score}
      </Typography>
      <Button
        onClick={() => startGame(false)}
        sx={{ visibility: `${isGameStarted ? 'visible' : 'hidden'}`, borderRadius: '5px' }}>
        PAUSE
      </Button>
    </Box>
  );
}

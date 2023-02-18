import { Button, ButtonProps } from '@mui/material';

export default function StartButton({ sx, onClick, children }: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        ...sx,
        display: 'flex',
        textTransform: 'none',
        color: '#abacad',
        border: '1px solid transparent',
        '&:hover': {
          borderRight: '1px solid #4e4d4d',
          borderTop: '1px solid #757373',
        },
      }}>
      {children}
    </Button>
  );
}

import { Button, styled } from '@mui/material';

const StartButton = styled(Button)({
  display: 'flex',
  color: '#abacad',
  border: '1px solid transparent',
  '&:hover': {
    borderRight: '1px solid #4e4d4d',
    borderTop: '1px solid #757373',
  },
});

export default StartButton;

import { Box, Button, ButtonProps, List, styled } from '@mui/material';

export default function Header() {
  const ButtonSx = styled(Button)<ButtonProps>(() => ({
    textTransform: 'none',
  }));

  return (
    <Box component="header" sx={{ display: 'flex' }}>
      <List component="nav" sx={{ display: 'flex', columnGap: '10px' }}>
        <ButtonSx>About</ButtonSx>
        <ButtonSx>Stack</ButtonSx>
        <ButtonSx>First steps</ButtonSx>
      </List>
    </Box>
  );
}

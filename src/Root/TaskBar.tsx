import { Box, ClickAwayListener, Popper, Slide } from '@mui/material';
import { useState } from 'react';
import { GrWindows as IcoStart } from 'react-icons/gr';
import TaskbarButton from '../Home/UI/TaskbarButton';
import StartMenu from '../Home/StartMenu/StartMenu';

export default function Taskbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!anchorEl) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '45px',
        background:
          'linear-gradient(0deg, rgba(39,30,30,1) 0%, rgba(43,42,31,1) 49%, rgba(45,43,48,1) 100%)',
      }}>
      <ClickAwayListener onClickAway={handleClose}>
        <Box sx={{ height: '100%' }}>
          <TaskbarButton active={Boolean(anchorEl)} title="Start" onClick={handleClick}>
            <IcoStart />
          </TaskbarButton>
          <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Slide {...TransitionProps} direction="right">
                <Box
                  width="300px"
                  height="400px"
                  sx={{
                    background: 'linear-gradient(180deg, #2b2424 0%, #313027 49%, #37353a 100%)',
                    pb: '5px',
                    display: 'flex',
                  }}>
                  <StartMenu />
                </Box>
              </Slide>
            )}
          </Popper>
        </Box>
      </ClickAwayListener>
    </Box>
  );
}

import { Box, ClickAwayListener, Popper, Slide, Link, Button } from '@mui/material';
import { useState } from 'react';
import { GrWindows as IcoStart } from 'react-icons/gr';
import { TaskbarBtnStyles } from './button-styles';
import StartMenu from '../../Home/StartMenu/StartMenu';
import { useAppSelector } from '../../redux/store';
import appList from '../../Home/Applications/AppList';
import { NavLink } from 'react-router-dom';
import ManagedTooltip from '../../Home/UI/ManagedTooltip';

export const TASKBAR_HEIGHT = '45px';

export default function Taskbar() {
  const tabs = useAppSelector((state) => state.tabs);

  // StartMenu logic
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const clickStartMenuBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!anchorEl) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
  };
  const closeStartMenu = () => {
    setAnchorEl(null);
  };
  // end StartMenu logic

  return (
    <Box
      component="footer"
      sx={{
        position: 'sticky',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: TASKBAR_HEIGHT,
        background:
          'linear-gradient(0deg, rgba(39,30,30,1) 0%, rgba(43,42,31,1) 49%, rgba(45,43,48,1) 100%)',
      }}>
      <ClickAwayListener onClickAway={closeStartMenu}>
        <Box sx={{ height: '100%' }}>
          <ManagedTooltip title="Start">
            <Button
              sx={{ ...TaskbarBtnStyles }}
              onClick={clickStartMenuBtn}
              className={`${Boolean(anchorEl) ? 'active' : ''}`}>
              <IcoStart />
            </Button>
          </ManagedTooltip>

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
      {Array.from(tabs).map((tab) => (
        <ManagedTooltip key={tab} title={tab}>
          <Link component={NavLink} to={appList[tab].link} sx={{ ...TaskbarBtnStyles }}>
            {appList[tab].icon}
          </Link>
        </ManagedTooltip>
      ))}
    </Box>
  );
}

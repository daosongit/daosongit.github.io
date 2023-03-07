import { Box, Button, Tooltip } from '@mui/material';
import { AiFillCloseCircle as IcoClose } from 'react-icons/ai';
import { VscChromeMinimize as IcoMinimize } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { removeTab } from '../redux/tabSlice';
import { memo } from 'react';

export const TOPNAV_HEIGHT = '32px';

type NavItemProps = {
  title: string;
  onClick: () => void;
  children?: React.ReactElement;
};

const NavItem = ({ children, title, onClick }: NavItemProps) => (
  <Tooltip title={title} describeChild>
    <span>
      <Button onClick={onClick}>{children}</Button>
    </span>
  </Tooltip>
);

function TopNavigation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function getTabFromUrl() {
    const href = window.location.href;
    const path = href.slice(href.search('#') + 2);
    return path.charAt(0).toUpperCase() + path.slice(1);
  }

  const closeTab = () => {
    dispatch(removeTab(getTabFromUrl()));
    navigate('/');
  };

  return (
    <Box
      component="header"
      sx={{
        height: TOPNAV_HEIGHT,
        position: 'sticky',
        top: 0,
        backgroundColor: 'background.default',
        zIndex: '1',
      }}>
      <Box component="nav" sx={{ display: 'flex', columnGap: '10px', justifyContent: 'flex-end' }}>
        <NavItem title="Minimize" onClick={() => navigate('/')}>
          <IcoMinimize size={20} />
        </NavItem>{' '}
        <NavItem title="Close" onClick={closeTab}>
          <IcoClose size={20} />
        </NavItem>
      </Box>
    </Box>
  );
}

export default memo(TopNavigation);

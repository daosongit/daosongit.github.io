import { Box, Button, Tooltip } from '@mui/material';
import { AiFillCloseCircle as IcoClose, AiFillGithub as IcoGitHub } from 'react-icons/ai';
import { VscChromeMinimize as IcoMinimize } from 'react-icons/vsc';
import { BiArrowBack as IcoBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { removeTab } from '../redux/tabSlice';

export const TOPNAV_HEIGHT = '32px';

type NavItemProps = {
  disabled?: boolean;
  title: string;
  onClick: () => void;
  children?: React.ReactElement;
};

const NavItem = ({ children, title, onClick, disabled = false }: NavItemProps) => (
  <Tooltip title={title} describeChild>
    <span>
      <Button onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </span>
  </Tooltip>
);

export default function TopNavigation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const tabs = useAppSelector((state) => state);
  const previosTab = () => {
    // todo
  };
  const closeTab = () => {
    const href = window.location.href;
    const path = href.slice(href.search('#') + 2);
    const tab = path.charAt(0).toUpperCase() + path.slice(1);
    dispatch(removeTab(tab));
    navigate('/');
  };

  return (
    <Box component="header" sx={{ height: TOPNAV_HEIGHT }}>
      <Box component="nav" sx={{ display: 'flex', columnGap: '10px', justifyContent: 'flex-end' }}>
        <NavItem disabled={tabs.length <= 1} title="Previous" onClick={previosTab}>
          <IcoBack size={20} />
        </NavItem>
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

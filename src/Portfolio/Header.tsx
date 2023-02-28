import { Box, Button, Tooltip } from '@mui/material';
import { AiFillCloseCircle as IcoClose, AiFillGithub as IcoGitHub } from 'react-icons/ai';
import { VscChromeMinimize as IcoMinimize } from 'react-icons/vsc';
import { BiArrowBack as IcoBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

type NavItemProps = {
  title: string;
  onClick: () => void;
  children?: React.ReactElement;
};

const NavItem = ({ children, title, onClick }: NavItemProps) => (
  <Tooltip title={title} describeChild>
    <Button sx={{ textTransform: 'none' }} onClick={onClick}>
      {children}
    </Button>
  </Tooltip>
);

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box component="header" sx={{ mb: '20px' }}>
      <Box component="nav" sx={{ display: 'flex', columnGap: '10px', justifyContent: 'flex-end' }}>
        <NavItem
          title="Previous"
          onClick={() => {
            /* todo */
          }}>
          <IcoBack size={20} />
        </NavItem>
        <NavItem
          title="Minimize"
          onClick={() => {
            /* todo */
          }}>
          <IcoMinimize size={20} />
        </NavItem>{' '}
        <NavItem title="Close" onClick={() => navigate('/')}>
          <IcoClose size={20} />
        </NavItem>
      </Box>
    </Box>
  );
}

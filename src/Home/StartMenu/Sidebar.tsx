import { List, styled, Tooltip, Link } from '@mui/material';
import {
  FaTelegramPlane as IcoTg,
  FaLinkedinIn as IcoIn,
  FaGithub as IcoGit,
} from 'react-icons/fa';

const SocialLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  padding: '8px 0',
  color: '#fff',
  border: '1px solid transparent',
  '&:hover': {
    borderRight: '1px solid #4e4d4d',
    borderTop: '1px solid #757373',
    backgroundColor: 'rgba(0,0,0, 0.05)',
  },
});

function Sidebar() {
  const linksList = [
    {
      title: 'GitHub',
      icon: <IcoGit size={20} />,
      link: 'https://github.com/daosongit',
    },
    { title: 'Telegram', icon: <IcoTg size={20} />, link: 'https://t.me/bezmn' },
    {
      title: 'Linkedin',
      icon: <IcoIn size={20} />,
      link: 'https://www.linkedin.com/in/ivan-kulai/',
    },
  ];
  return (
    <List
      sx={{
        pb: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        borderRight: '1px solid #3b3a3a',
      }}>
      {linksList.map((el) => (
        <Tooltip key={el.title} title={el.title} describeChild placement="right">
          <SocialLink href={el.link} target="_blank">
            {el.icon}
          </SocialLink>
        </Tooltip>
      ))}
    </List>
  );
}

export default Sidebar;

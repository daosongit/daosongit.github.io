import { List } from '@mui/material';
import { memo } from 'react';
import AppButtonLink from '../UI/AppButton';
import { ChromeSVG, SnakeSVG } from '../Applications/AppIcons';

function PinnedApps() {
  const pinnedAppsList = [
    { title: 'Portfolio', icon: <ChromeSVG />, link: '/portfolio' },
    { title: 'Snake', icon: <SnakeSVG />, link: '/snake' },
  ];
  return (
    <List
      sx={{ display: 'flex', columnGap: '5px', p: '20px', justifyContent: 'flex-end', m: '10px' }}>
      {pinnedAppsList.map((el) => (
        <AppButtonLink
          key={el.title}
          title={el.title}
          link={el.link}
          sx={{
            backgroundColor: '#6e6e6e',
            '&:hover': {
              backgroundColor: '#585757',
            },
          }}>
          {el.icon}
        </AppButtonLink>
      ))}
    </List>
  );
}

export default memo(PinnedApps);

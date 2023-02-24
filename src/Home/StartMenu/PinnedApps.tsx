import { List } from '@mui/material';
import { memo } from 'react';
import AppButton from '../UI/AppButton';
import { ChromeSVG, SnakeSVG } from '../AppIcons';

function PinnedApps() {
  console.log('PinnedApps');
  const pinnedAppsList = [
    { title: 'Portfolio', icon: <ChromeSVG />, link: '/portfolio' },
    { title: 'Snake', icon: <SnakeSVG />, link: '/snake' },
  ];
  return (
    <List
      disablePadding
      sx={{ display: 'flex', columnGap: '5px', p: '20px', justifyContent: 'space-around' }}>
      {pinnedAppsList.map((el) => (
        <AppButton
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
        </AppButton>
      ))}
    </List>
  );
}

export default memo(PinnedApps);
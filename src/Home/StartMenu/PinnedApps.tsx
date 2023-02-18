import { List } from '@mui/material';
import { memo } from 'react';
import AppButton from '../../UI/AppButton';
import { ChromeSVG, SnakeSVG } from '../SvgIcons';

function PinnedApps() {
  console.log('PinnedApps');
  const pinnedAppsList = [
    { title: 'Portfolio', icon: <ChromeSVG /> },
    { title: 'Snake', icon: <SnakeSVG /> },
  ];
  return (
    <List
      disablePadding
      sx={{ display: 'flex', columnGap: '5px', p: '20px', justifyContent: 'space-around' }}>
      {pinnedAppsList.map((el) => (
        <AppButton
          title={el.title}
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

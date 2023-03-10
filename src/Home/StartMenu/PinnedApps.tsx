import { List } from '@mui/material';
import { memo } from 'react';
import AppButtonLink from '../UI/AppButton';
import appList from '../Applications/AppList';

function PinnedApps() {
  return (
    <List
      sx={{
        display: 'flex',
        columnGap: '5px',
        rowGap: '5px',
        p: '20px',
        justifyContent: 'flex-start',
        m: '10px',
        flexWrap: 'wrap',
      }}>
      {Object.entries(appList).map(([key, value]) => (
        <AppButtonLink
          key={key}
          title={key}
          link={value.link}
          sx={{
            backgroundColor: '#6e6e6e',
            '&:hover': {
              backgroundColor: '#585757',
            },
          }}>
          {value.icon}
        </AppButtonLink>
      ))}
    </List>
  );
}

export default memo(PinnedApps);

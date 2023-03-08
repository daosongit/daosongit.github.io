import { Box } from '@mui/material';
import { memo } from 'react';
import PinnedApps from './PinnedApps';
import Sidebar from './Sidebar';

function StartMenu() {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <PinnedApps />
      </Box>
    </>
  );
}

export default memo(StartMenu);

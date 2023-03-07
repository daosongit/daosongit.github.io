import { Box } from '@mui/material';
import { memo, useState } from 'react';
import PinnedApps from './PinnedApps';
import PowerPopup from './PowerDetails';
import Sidebar from './Sidebar';

function StartMenu() {
  const [powerPopup, setPowerPopup] = useState<boolean>(false);
  const handleOpen = () => {
    setPowerPopup(!powerPopup);
  };

  return (
    <>
      <Sidebar onClick={handleOpen} />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <PinnedApps />
        <PowerPopup power={powerPopup} />
      </Box>
    </>
  );
}

export default memo(StartMenu);

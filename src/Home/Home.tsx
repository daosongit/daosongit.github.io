import { Box, Typography } from '@mui/material';
import { TrashSVG } from './Applications/AppIcons';
import { TASKBAR_HEIGHT } from '../Root/TaskBar/TaskBar';
import Trash from './RecycleBin/RecycleBin';
import { useState } from 'react';
import AppButtonLink, { AppButton } from './UI/AppButton';
import appList from './Applications/AppList';

export default function Home() {
  const [isRecycleBin, setRecycleBin] = useState(false);
  const closeRecycleBin = () => {
    setRecycleBin(false);
  };
  return (
    <Box
      component="main"
      sx={{
        width: '100vw',
        height: `calc(100vh - ${TASKBAR_HEIGHT})`,
      }}>
      <Box
        sx={{
          height: '100%',
          backgroundImage: {
            xs: 'url(images/w.jpg)',
            sm: 'url(images/w-hd.jpg)',
            md: 'url(images/w-hd.jpg)',
            lg: 'url(images/w-fhd.jpg)',
            xl: 'url(images/w-2k.jpg)',
          },
          backgroundSize: 'cover',
          backgroundPosition: { xs: 'center', sm: 'right' },
          color: 'white',
          p: '20px',
          position: 'relative',
        }}>
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: 'fit-content',
            rowGap: '10px',
          }}>
          {Object.entries(appList).map(([key, value]) => (
            <AppButtonLink key={key} title={key} link={value.link}>
              {value.icon}
            </AppButtonLink>
          ))}
          <AppButton
            sx={{ position: 'absolute', right: '20px', bottom: '20px' }}
            onClick={() => setRecycleBin(!isRecycleBin)}>
            <TrashSVG />
            <Typography component="span" noWrap>
              Trash
            </Typography>
          </AppButton>
        </Box>
        <Trash isOpen={isRecycleBin} close={closeRecycleBin} />
      </Box>
    </Box>
  );
}

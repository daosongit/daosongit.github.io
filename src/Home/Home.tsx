import { Box } from '@mui/material';
import AppButton from './UI/AppButton';
import { ChromeSVG, SnakeSVG, TrashSVG } from './AppIcons';
import { TASKBAR_HEIGHT } from '../Root/TaskBar';

export default function Home() {
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
          backgroundPosition: 'right',
          color: 'white',
          p: '20px',
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
          <AppButton title="Portfolio" link="portfolio">
            <ChromeSVG />
          </AppButton>
          <AppButton title="Snake" link="snake">
            <SnakeSVG />
          </AppButton>
          <AppButton
            title="Trash"
            link="/trash"
            sx={{ position: 'absolute', right: '20px', bottom: '65px' }}>
            <TrashSVG />
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
}

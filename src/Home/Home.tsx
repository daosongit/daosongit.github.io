import { Box } from '@mui/material';
import AppButton from './UI/AppButton';
import { ChromeSVG, SnakeSVG, TrashSVG } from './AppIcons';

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        width: '100vw',
        height: 'calc(100vh - 45px)',
      }}>
      <Box
        sx={{
          height: '100%',
          backgroundImage: {
            xs: 'url(w.jpg)',
            sm: 'url(w-hd.jpg)',
            md: 'url(w-hd.jpg)',
            lg: 'url(w-fhd.jpg)',
            xl: 'url(w-2k.jpg)',
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
          <AppButton title="Portfolio">
            <ChromeSVG />
          </AppButton>
          <AppButton title="Snake">
            <SnakeSVG />
          </AppButton>
          <AppButton title="Trash" sx={{ position: 'absolute', right: '20px', bottom: '65px' }}>
            <TrashSVG />
          </AppButton>
        </Box>
      </Box>
    </Box>
  );
}

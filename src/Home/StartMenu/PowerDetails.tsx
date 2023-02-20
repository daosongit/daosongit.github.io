import { Fade, Stack } from '@mui/material';
import StartButton from '../UI/StartButton';
import { BsPower as IcoPower, BsMoon as IcoSleep } from 'react-icons/bs';
import { RxReload as IcoReload } from 'react-icons/rx';

function PowerPopup({ power }: { power: boolean }) {
  console.log('PowerPopup');
  return (
    <Fade in={power} timeout={500}>
      <Stack
        sx={{
          height: 'fit-content',
          visibility: `${power ? 'visible' : 'hidden'}`,
        }}>
        <StartButton
          sx={{ justifyContent: 'flex-start', columnGap: '20px' }}
          onClick={() => {
            window.opener = null;
            window.open('', '_self');
            window.close();
          }}>
          <IcoPower size={20} />
          Shut down
        </StartButton>
        <StartButton sx={{ justifyContent: 'flex-start', columnGap: '20px' }}>
          <IcoReload size={20} />
          Restart
        </StartButton>
        <StartButton sx={{ justifyContent: 'flex-start', columnGap: '20px' }}>
          <IcoSleep size={20} />
          Sleep
        </StartButton>
      </Stack>
    </Fade>
  );
}

export default PowerPopup;

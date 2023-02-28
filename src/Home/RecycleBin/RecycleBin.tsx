import { Box, Button, Typography } from '@mui/material';
import { TbMaximize as IcoMaximaze, TbMaximizeOff as IcoMaximazeOff } from 'react-icons/tb';
import { AiOutlineClose as IcoClose } from 'react-icons/ai';
import { useState } from 'react';
import TrashSvg from './TrashSvg';
import { AppButton } from '../UI/AppButton';

export default function Trash({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const [maximaze, setMaximaze] = useState(false);
  return (
    <Box
      sx={{
        display: `${isOpen ? 'block' : 'none'}`,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        m: 'auto',
        width: `${maximaze ? '100%' : '50%'}`,
        height: `${maximaze ? '100%' : '70%'}`,
        bgcolor: 'red',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '25px',
          background:
            'linear-gradient(186deg, rgba(29,38,38,1) 0%, rgba(20,19,19,1) 49%, #201919 100%)',
        }}>
        <Typography sx={{ pl: '10px' }}>Recycle Bin</Typography>
        <Box sx={{ display: 'flex' }}>
          <Button
            sx={{ color: 'inherit', minWidth: '40px' }}
            onClick={() => setMaximaze(!maximaze)}>
            {maximaze ? <IcoMaximazeOff /> : <IcoMaximaze />}
          </Button>
          <Button
            sx={{ color: 'inherit', minWidth: '40px', '&:hover': { bgcolor: '#da1212' } }}
            onClick={() => close()}>
            <IcoClose />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          p: '10px',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(186deg, rgba(35,48,48,1) 0%, rgba(41,40,40,1) 49%, rgba(67,51,51,1) 100%)',
        }}>
        <AppButton>
          <TrashSvg />
        </AppButton>
      </Box>
    </Box>
  );
}

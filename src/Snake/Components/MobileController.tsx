import { Box, Button, styled } from '@mui/material';
import { memo } from 'react';
import {
  BsArrowDownSquare as IcoDown,
  BsArrowLeftSquare as IcoLeft,
  BsArrowRightSquare as IcoRight,
  BsArrowUpSquare as IcoUp,
} from 'react-icons/bs';
import { MOVE_DIRECTION } from '../modules/constants';

interface MobileControllerProps {
  changeDirection: (d: string) => void;
}

const ButtonSx = styled(Button)({
  p: 0,
  minWidth: 0,
});

function MobileController({ changeDirection }: MobileControllerProps) {
  console.log('MobileController');
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        flexDirection: 'column',
        alignItems: 'center',
        mt: '40px',
      }}>
      <ButtonSx onClick={() => changeDirection(MOVE_DIRECTION.up)}>
        <IcoUp size={35} />
      </ButtonSx>
      <Box sx={{ display: 'flex', columnGap: '30px' }}>
        <ButtonSx onClick={() => changeDirection(MOVE_DIRECTION.left)}>
          <IcoLeft size={35} />
        </ButtonSx>
        <ButtonSx onClick={() => changeDirection(MOVE_DIRECTION.right)}>
          <IcoRight size={35} />
        </ButtonSx>
      </Box>
      <ButtonSx onClick={() => changeDirection(MOVE_DIRECTION.down)}>
        <IcoDown size={35} />
      </ButtonSx>
    </Box>
  );
}

export default memo(MobileController);

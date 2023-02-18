import { List } from '@mui/material';
import StartButton from '../../UI/StartButton';
import { CiSettings as IcoSetting } from 'react-icons/ci';
import { BsPower as IcoPower } from 'react-icons/bs';

function Sidebar({ onClick }: { onClick: () => void }) {
  console.log('Sidebar');
  return (
    <List
      disablePadding
      sx={{
        pb: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <StartButton>
        <IcoSetting color="white" size={26} />
      </StartButton>
      <StartButton onClick={onClick}>
        <IcoPower color="white" size={23} />
      </StartButton>
    </List>
  );
}

// export default React.memo(Sidebar);
export default Sidebar;

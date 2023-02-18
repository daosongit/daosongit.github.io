import { Button, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { FC, ReactElement, useState } from 'react';

interface TaskbarButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  active: boolean;
  children?: ReactElement;
}

const TaskbarButton: FC<TaskbarButtonProps> = ({ title, active, onClick, children }) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(false)}
      bgcolor={active ? '#1b1b14' : 'transparent'}
      sx={{ height: '100%' }}>
      <Tooltip
        title={title}
        open={showTooltip}
        disableHoverListener
        disableFocusListener
        describeChild>
        <Button
          sx={{
            p: 0,
            width: '5px',
            height: '100%',
            color: '#fff',
            fontSize: '20px',
            '&:hover': { color: '#646363', bgcolor: '#1b1b14' },
            'svg': { height: '30px' },
          }}
          onClick={onClick}>
          {children}
        </Button>
      </Tooltip>
    </Box>
  );
};

export default TaskbarButton;

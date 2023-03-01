import { Box, Tooltip } from '@mui/material';
import { useState } from 'react';

interface ManagedTooltipProps {
  title: string;
  // 'any' beacuse ReactElement can be undefined but Tooltip must has children
  children?: any;
}

const ManagedTooltip = (props: ManagedTooltipProps) => {
  const { title, children } = props;
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  return (
    <Box
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(false)}
      sx={{ height: '100%' }}>
      <Tooltip
        title={title}
        open={showTooltip}
        disableHoverListener
        disableFocusListener
        describeChild>
        {children}
      </Tooltip>
    </Box>
  );
};

export default ManagedTooltip;

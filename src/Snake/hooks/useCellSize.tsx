import { useMediaQuery } from '@mui/material';

const useCellSize = () => {
  const xl = useMediaQuery('(min-width:1536px)');
  const lg = useMediaQuery('(min-width:1200px)');
  const md = useMediaQuery('(min-width:900px)');
  const sm = useMediaQuery('(min-width:600px)');

  if (xl) return 70;
  else if (lg) return 40;
  else if (md) return 35;
  else if (sm) return 30;
  else return 25;
};

export default useCellSize;

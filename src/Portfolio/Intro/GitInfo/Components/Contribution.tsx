import { Box } from '@mui/material';

export default function Contribution({ contribution }: { contribution: number | undefined }) {
  return (
    <>
      <Box sx={{ m: '20px 0 10px' }}>
        {contribution || '...'}
        {' contributions in the last year'}
      </Box>
      <Box
        component="img"
        src="https://ghchart.rshah.org/ivan-kulai"
        alt="Github charts"
        sx={{
          width: '100%',
          border: '1px solid grey',
          p: '10px 15px',
          borderRadius: '5px',
        }}
      />
    </>
  );
}
